import { projects } from "../projects";
import { makeSlug } from "./makeSlug";

const slugs = projects.map((project) => makeSlug(project.title));

export function useProject(slug: string) {
  const index = slugs.indexOf(slug);
  const project = projects[index];

  return project || null;
}
