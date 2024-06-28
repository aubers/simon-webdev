import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProject } from "../lib/useProject";
import NotFoundPage from "./NotFoundPage";
import Socials from "../components/Socials";
import { BackHomeLink } from "../components/BackHomeLink";
import Tag from "../components/Tag";
import Footer from "../components/Footer";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = useProject(slug || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <div className="container mx-auto">
      <div className="m-3 flex justify-between text-lg">
        <BackHomeLink />
        <Socials />
      </div>

      <div className="flex flex-col-reverse gap-6 px-4 py-2 lg:flex-row lg:px-0">
        <aside className="lg:w-[320px]">
          <div className="bg-gray space-y-4 p-4">
            <div className="flex h-28 items-center justify-center">
              <img
                className="h-20 w-20"
                src={project.icon}
                alt={`Icone du projet ${project.title}`}
              />
            </div>

            <p>
              <span className="font-bold">Titre :</span> {project.title}
            </p>
            <p>
              <span className="font-bold">Description :</span>{" "}
              {project.description}
            </p>
            <p>
              <span className="font-bold">Lien :</span>{" "}
              {project.url ? (
                <a
                  className="text-primary break-all hover:underline"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.url}
                </a>
              ) : (
                <span>Hors ligne</span>
              )}
            </p>
            <div className="space-y-2">
              <span className="font-bold">Tags :</span>
              <ul className="flex flex-wrap gap-3 text-sm">
                {project.tags.map((tag) => (
                  <Tag key={tag} tag={tag} />
                ))}
              </ul>
            </div>
          </div>
        </aside>

        <main className="bg-gray flex-1 space-y-8 rounded p-6">
          <h1 className="text-2xl font-bold">{project.title}</h1>

          <section className="space-y-4">{project.text}</section>

          {project.images.length > 0 && (
            <section className="space-y-2">
              <h2>Images</h2>
              <ul className="flex flex-wrap gap-4">
                {project.images.map((image) => (
                  <li key={image}>
                    <a href={image} target="_blank">
                      <img
                        src={image}
                        className="border-lightgray hover:border-primary max-h-72 cursor-pointer rounded border-2 transition-colors"
                        alt="Image du projet"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}
