import { Link } from "react-router-dom";
import { Project } from "../lib/Project";
import { makeSlug } from "../lib/makeSlug";
import Tag from "./Tag";

interface ProjectItemProps {
  project: Project;
}

export default function ProjectItem({ project }: ProjectItemProps) {
  const projectUrl = `/projets/${makeSlug(project.title)}`;

  return (
    <>
      <Link to={projectUrl}>
        <img
          className="h-20 w-20 cursor-pointer rounded"
          src={project.icon}
          alt={`Icone du project ${project.title}`}
        />
      </Link>
      <div className="flex flex-1 flex-col gap-y-2">
        <div className="flex flex-col gap-y-1">
          <p className="font-medium">
            <Link to={projectUrl}>{project.title}</Link>
          </p>
          <p className="text-sm">{project.description}</p>
        </div>
        <div className="flex items-end gap-2">
          <ul className="flex flex-1 flex-wrap gap-2 text-xs">
            {project.tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </ul>
          <Link
            to={projectUrl}
            className="text-primary text-sm hover:underline"
          >
            Voir plus
          </Link>
        </div>
      </div>
    </>
  );
}
