import { useState } from "react";
import Bubbles from "../components/Bubbles";
import ProjectItem from "../components/ProjectItem";
import Socials from "../components/Socials";
import Checkbox from "../components/Checkbox";
import { useSortedTags } from "../lib/useSortedTags";
import { useFilteredProjects } from "../lib/useFilteredProjects";
import Footer from "../components/Footer";

export default function HomePage() {
  const tags = useSortedTags();

  const [search, setSearch] = useState("");
  const [checkedTags, setCheckedTags] = useState<string[]>([]);

  const filteredProjects = useFilteredProjects(search, checkedTags);

  return (
    <div className="container mx-auto px-4 lg:px-0">
      <Socials />

      <header className="relative my-8 flex flex-col items-center gap-y-8 text-center lg:my-0 lg:h-64 lg:flex-row lg:gap-y-0">
        <div className="flex-1">
          <div className="inline-block space-y-1 text-right">
            <h1 className="text-xl font-bold lg:text-2xl">
              Bonjour, je suis <strong className="text-primary">Simon</strong>.
            </h1>
            <h2 className="text-lg lg:text-xl">Développeur web</h2>
          </div>
        </div>

        <div className="flex-1 text-lg lg:text-xl">
          <p className="max-w-xs lg:max-w-md">
            Je crée des sites web et applications avec de la{" "}
            <strong className="font-bold">passion</strong> et des technologies{" "}
            <strong className="font-bold">modernes</strong>.
          </p>
        </div>

        <Bubbles />
      </header>

      <main className="bg-gray mx-4 rounded-xl p-4 lg:mx-0">
        <h3 className="mb-12 text-center text-lg font-medium">Projets</h3>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="search">Rechercher</label>
            <input
              className="border-input-border bg-input-bg focus:border-primary w-full max-w-md rounded border px-3 py-2 outline-none transition-colors"
              type="text"
              id="search"
              placeholder="ex: site vitrine"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <ul className="mb-6 mt-2 flex w-full flex-wrap gap-x-5">
            {tags.map((tag) => (
              <li key={tag} className="flex items-center gap-x-1">
                <Checkbox
                  name={tag}
                  checked={checkedTags.includes(tag)}
                  onChange={(value) => {
                    if (value) {
                      setCheckedTags((checkedTags) => [...checkedTags, tag]);
                    } else {
                      setCheckedTags((checkedTags) =>
                        checkedTags.filter((checkedTag) => checkedTag !== tag),
                      );
                    }
                  }}
                />
              </li>
            ))}
          </ul>
        </form>

        <ul className="grid gap-x-4 gap-y-6 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <li
              key={project.title}
              className="border-lightgray flex h-fit gap-x-3 rounded border p-3"
            >
              <ProjectItem project={project} />
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
}
