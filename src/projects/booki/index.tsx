import { Project } from "../../lib/Project";
import icon from "./icon.webp";
import image1 from "./image-1.webp";
import image2 from "./image-2.webp";

export const booki: Project = {
  icon,
  title: "Booki",
  description:
    "Trouvez des hébergements et des activités dans la ville de votre choix avec Booki !",
  github: "https://github.com/purplnay/booki",
  url: "https://purplnay.github.io/booki/",
  text: (
    <>
      <p>
        Projet réalisé dans le cadre de la formation de Développeur Web d'
        <a href="https://openclassrooms.com/" target="_blank">
          OpenClassrooms
        </a>
        .
      </p>
      <p>
        Le projet consiste en la réalisation d'un site{" "}
        <strong>responsive</strong> en <strong>HTML</strong> et{" "}
        <strong>CSS</strong> à partir d'une maquette donnée. Le site web est
        développé en utilisant uniquement les langages autorisés, sans
        utilisation de librairies ou de framework.
      </p>
    </>
  ),
  images: [image1, image2],
  tags: ["HTML", "CSS"],
};
