import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import defaultContentJson from './defaultContent.json';
import type { PublishedSnapshot, SiteContent } from './types';

// 内置兜底内容：线上快照取不到（本地开发、内容桶故障、首次上线前）时使用。
// JSON 推不出字面量联合类型（如 footer 的 platform），这里断言；结构由后端导入脚本的 zod 校验把关。
export const defaultContent = defaultContentJson as SiteContent;

// 内部系统发布的线上快照，CloudFront 从内容桶提供，缓存约 60 秒。
const SNAPSHOT_URL = '/content/current.json';

// 快照迟迟不来时不再等，直接用兜底内容，避免整页一直空白。
const SNAPSHOT_TIMEOUT_MS = 3000;

const SECTION_KEYS: (keyof SiteContent)[] = ['home', 'about', 'events', 'guide', 'contact', 'footer'];

function isSnapshot(value: unknown): value is PublishedSnapshot {
  const snapshot = value as PublishedSnapshot | null;
  return (
    snapshot?.schemaVersion === 1 &&
    typeof snapshot.content === 'object' &&
    snapshot.content !== null &&
    SECTION_KEYS.every((key) => typeof snapshot.content[key] === 'object' && snapshot.content[key] !== null)
  );
}

async function fetchSnapshot(signal: AbortSignal): Promise<SiteContent | null> {
  try {
    const response = await fetch(SNAPSHOT_URL, { signal });
    if (!response.ok) return null;
    const body: unknown = await response.json();
    return isSnapshot(body) ? body.content : null;
  } catch {
    return null;
  }
}

const ContentContext = createContext<SiteContent>(defaultContent);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), SNAPSHOT_TIMEOUT_MS);
    fetchSnapshot(controller.signal).then((snapshot) => {
      window.clearTimeout(timer);
      setContent(snapshot ?? defaultContent);
    });
    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, []);

  // 快照是 CDN 上的小静态文件，通常几十毫秒就到。先不渲染，避免先闪一下旧内容再换掉。
  if (!content) return null;

  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>;
}

export function useSiteContent(): SiteContent {
  return useContext(ContentContext);
}
