import { useMemo } from "react";
import { projects } from "../projects";

export function useFilteredProjects(search: string, tags: string[]) {
  const filteredProjects = useMemo(() => {
    let result = [...projects];

    if (search.length) {
      const searchedWords = search.toLowerCase().split(" ");
      const maxScore = searchedWords.length;

      // Filter out projects that don't match every search term
      result = result.filter((project) => {
        let score = 0;

        searchedWords.forEach((word) => {
          if (
            project.title.toLowerCase().includes(word) ||
            project.description.toLowerCase().includes(word)
          ) {
            score++;
          }
        });

        return score === maxScore;
      });
    }

    if (tags.length) {
      const maxScore = tags.length;

      // Filter out projects that don't match every checked tags
      result = result.filter((project) => {
        let score = 0;

        tags.forEach((tag) => {
          if (project.tags.includes(tag)) {
            score++;
          }
        });

        return score === maxScore;
      });
    }

    return result;
  }, [search, tags]);

  return filteredProjects;
}
