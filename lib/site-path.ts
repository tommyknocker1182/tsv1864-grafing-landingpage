
const basePath =
  process.env.NEXT_PUBLIC_SITE_TEST === "true"
    ? "/tsv-neu"
    : "";

export function sitePath(path: string) {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
