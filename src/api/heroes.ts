import { http } from './http';

export interface HeroItem {
  id: number;
  title: string;
  /** 完整 URL，或以 / 开头的站内路径（见 normalizeHeroMediaUrl） */
  mediaUrl: string;
}

export interface HeroesApiResponse {
  code: number;
  message: string;
  data: HeroItem[];
}

/** 将后台可能返回的 @public/ 约定、相对路径转为浏览器可用的 src */
export function normalizeHeroMediaUrl(mediaUrl: string): string {
  const t = mediaUrl.trim();
  if (t.startsWith('http://') || t.startsWith('https://')) {
    return t;
  }
  if (t.startsWith('@public/')) {
    return `/${t.slice('@public/'.length)}`;
  }
  if (t.startsWith('/')) {
    return t;
  }
  return `/${t}`;
}

export async function fetchHeroes(): Promise<HeroesApiResponse> {
  const { data } = await http.get<HeroesApiResponse>('/api/heroes');
  return data;
}
