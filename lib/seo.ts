import { SITE } from '@/lib/site'; export function absoluteUrl(pathname: string, base = SITE.mainUrl){ return new URL(pathname, base).toString(); }
