import { Project } from "../../lib/Project";
import icon from "./icon.webp";
import image1 from "./image-1.webp";
import image2 from "./image-2.webp";
import image3 from "./image-3.webp";
import image4 from "./image-4.webp";
import image5 from "./image-5.webp";

export const sophieBluel: Project = {
  icon,
  title: "Sohpie Bluel - Portfolio",
  description: "Le portfolio de Sophie Bluel, architecte d'intérieur.",
  github: "https://github.com/purplnay/portfolio-sophie-bluel",
  text: (
    <>
      <p>
        Projet réalisé durant la formation de Développeur Web d'
        <a href="https://openclassrooms.com" target="_blank">
          OpenClassrooms
        </a>
        . Le site contenait déjà le code du back-end en Node.js, ainsi que
        l'intégration HTML et CSS. L'objectif était de suivre les tâches du{" "}
        <strong>Kaban</strong> afin d'y ajouter les parties{" "}
        <strong>dynamiques</strong>.
      </p>
      <p>
        L'utilisation des <strong>API DOM et fetch</strong> a permis de gérer
        les travaux via l'API tout en gardant l'interface en{" "}
        <strong>synchronisation</strong> avec la base de données du back-end.
      </p>
      <p>
        Le portfolio possède également un{" "}
        <strong>système d'authentification</strong> afin que Sophie Bluel puisse
        se connecter et mettre à jour les travaux disponibles via des{" "}
        <strong>modales</strong>.
      </p>
    </>
  ),
  images: [image1, image2, image3, image4, image5],
  tags: ["HTML", "CSS", "JavaScript"],
};
