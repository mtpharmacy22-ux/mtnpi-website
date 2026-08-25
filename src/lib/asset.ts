// Small helper so plain <img> tags (used by ImageSlot) resolve correctly
// both locally (basePath "") and on GitHub Pages (basePath "/mtnpi-website").
// NEXT_PUBLIC_BASE_PATH is set at build time in next.config.mjs / the
// GitHub Actions workflow and is inlined into the client bundle by Next.js.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
