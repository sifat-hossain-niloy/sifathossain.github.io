// Prepends NEXT_PUBLIC_BASE_PATH to a root-absolute path so that plain <a> tags
// pointing at files in /public still work when the site is served from a sub-path
// (e.g. https://<user>.github.io/<repo>/). Next.js <Link> handles basePath
// automatically, so this helper is only needed for raw <a href> / <img src>.
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (!path.startsWith('/')) return path;
  return `${base}${path}`;
}
