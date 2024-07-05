import { makeSlug } from "../lib/makeSlug";
import { booki } from "./booki";

export const projects = [booki].sort(
  (a, b) => makeSlug(a.title).charCodeAt(0) - makeSlug(b.title).charCodeAt(0),
);
