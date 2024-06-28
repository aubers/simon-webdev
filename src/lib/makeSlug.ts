export function makeSlug(str: string) {
  return str
    .toLowerCase()
    .replace(/\s/g, "-")
    .replace(/[^a-z0-9]/g, "");
}