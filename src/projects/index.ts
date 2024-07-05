import { makeSlug } from "../lib/makeSlug";
import { booki } from "./booki";
import { kasa } from "./kasa";
import { monVieuxGrimmoire } from "./mon-vieux-grimmoire";
import { ninaCarducci } from "./nina-carducci";
import { sophieBluel } from "./sophie-bluel";

export const projects = [
  booki,
  kasa,
  monVieuxGrimmoire,
  ninaCarducci,
  sophieBluel,
].sort(
  (a, b) => makeSlug(a.title).charCodeAt(0) - makeSlug(b.title).charCodeAt(0),
);
