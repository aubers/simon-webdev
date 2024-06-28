import { makeSlug } from "../lib/makeSlug";
import { example1 } from "./example-1";
import { example2 } from "./example-2";

export const projects = [example1, example2].sort(
  (a, b) => makeSlug(a.title).charCodeAt(0) - makeSlug(b.title).charCodeAt(0),
);
