// 内容里的图片 / 文件路径 → 浏览器可用的 URL。约定见 ./types.ts。
const bundledAssets = import.meta.glob<string>('../assets/*', {
  eager: true,
  query: '?url',
  import: 'default',
});

const BUNDLED_PREFIX = 'assets/';

export function resolveMedia(path: string): string {
  if (path.startsWith(BUNDLED_PREFIX)) {
    return bundledAssets[`../${path}`] ?? '';
  }
  return path;
}

/** 链接留空（或历史数据里的 `#`）表示「敬请期待」。 */
export function isLinkAvailable(link: string): boolean {
  return link.trim() !== '' && link !== '#';
}
