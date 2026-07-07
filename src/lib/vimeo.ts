export const VIMEO = {
  hero: '1078394414',
  portfolio: ['1078392943', '1079190444', '1078391608'],
} as const;

export function vimeoEmbed(id: string, opts?: { autoplay?: boolean; muted?: boolean; loop?: boolean }): string {
  const params = new URLSearchParams();
  if (opts?.autoplay) params.set('autoplay', '1');
  if (opts?.muted) params.set('muted', '1');
  if (opts?.loop) params.set('loop', '1');
  params.set('badge', '0');
  params.set('byline', '0');
  params.set('portrait', '0');
  params.set('title', '0');
  const qs = params.toString();
  return `https://player.vimeo.com/video/${id}?${qs}`;
}

export function vimeoThumbnail(id: string): string {
  return `https://vumbnail.com/${id}.jpg`;
}
