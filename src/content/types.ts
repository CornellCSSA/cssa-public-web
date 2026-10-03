// 官网可编辑内容的结构。
//
// 唯一事实来源是 cssa-server 的 src/validators/siteContent.schemas.ts（zod），
// 这里与内部系统 cssa-internal-panel-web 各自照抄一份类型。改结构时三处一起改。
//
// 约定：
// - 图片 / 文件字段是一个路径字符串：
//   - `/media/...`：内部系统上传到内容桶的文件（线上由 CloudFront 提供）；
//   - `assets/...`：打包在本仓库 src/assets 里的图片，只出现在内置的兜底内容里；
//   - 其他以 `/` 或 `http` 开头的值原样使用（例如 public/files 下的 PDF）。
// - 链接留空表示「敬请期待」，按钮显示为禁用。
// - 布局（哪一段在左、哪一段在右等）由代码决定，不进内容。

export interface HeroContent {
  image: string;
  title: string;
}

export interface HomeHighlight {
  title: string;
  image: string;
  link: string;
}

export interface HomeContent {
  hero: {
    slides: string[];
    titleZh: string;
    titleEn: string;
    subtitle: string;
  };
  about: { heading: string; text: string };
  events: { heading: string; text: string; highlights: HomeHighlight[] };
  guide: { heading: string; text: string };
}

export interface Department {
  name: string;
  image: string;
  description: string;
}

export interface AboutContent {
  hero: HeroContent;
  intro: { heading: string; paragraphs: string[]; image: string };
  history: { heading: string; entries: { year: string; text: string }[]; image: string };
  departments: { heading: string; text: string; items: Department[] };
  join: {
    heading: string;
    paragraphs: string[];
    link: string;
    qrCodes: { label: string; image: string }[];
  };
}

export interface UpcomingEvent {
  title: string;
  time: string;
  location: string;
  image: string;
  link: string;
}

export interface AnnualEvent {
  title: string;
  time: string;
  description: string;
  image: string;
  link: string;
}

export interface EventsContent {
  hero: HeroContent;
  upcoming: { heading: string; items: UpcomingEvent[] };
  annual: { heading: string; items: AnnualEvent[] };
}

export interface GuideContent {
  hero: HeroContent;
  heading: string;
  text: string;
  cover: string;
  file: { url: string; fileName: string };
}

export interface ContactContent {
  hero: HeroContent;
  social: { heading: string; items: { label: string; value: string }[]; image: string };
  support: { heading: string; text: string; qrCode: string };
}

export const SOCIAL_PLATFORMS = ['wechat', 'instagram', 'youtube', 'linkedin', 'bilibili'] as const;
export type SocialPlatform = (typeof SOCIAL_PLATFORMS)[number];

export interface FooterContent {
  socialLinks: { platform: SocialPlatform; url: string }[];
  notice: string;
  legalLink: { text: string; url: string };
}

export interface SiteContent {
  home: HomeContent;
  about: AboutContent;
  events: EventsContent;
  guide: GuideContent;
  contact: ContactContent;
  footer: FooterContent;
}

/** 内部系统发布到 /content/current.json 的快照。 */
export interface PublishedSnapshot {
  schemaVersion: 1;
  releaseId: string;
  publishedAt: string;
  content: SiteContent;
}
