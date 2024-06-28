import { useMemo } from "react";
import { projects } from "../projects";

export function useSortedTags() {
  const sortedTags = useMemo(() => {
    const tags = new Set<string>();

    // Get each tag uniquely
    projects.forEach((project) => {
      project.tags.forEach((tag) => {
        tags.add(tag);
      });
    });

    return [...tags].sort();
  }, []);

  return sortedTags;
}
