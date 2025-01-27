import { makeSlug } from "../lib/makeSlug";
import { booki } from "./booki";
import { genshinTeamRandomizer } from "./genshin-team-randomizer";
import { kasa } from "./kasa";
import { monVieuxGrimmoire } from "./mon-vieux-grimmoire";
import { ninaCarducci } from "./nina-carducci";
import { p2pScreensharing } from "./p2p-screensharing";
import { sophieBluel } from "./sophie-bluel";

export const projects = [
  booki,
  genshinTeamRandomizer,
  kasa,
  monVieuxGrimmoire,
  ninaCarducci,
  p2pScreensharing,
  sophieBluel,
].sort(
  (a, b) => makeSlug(a.title).charCodeAt(0) - makeSlug(b.title).charCodeAt(0),
);
