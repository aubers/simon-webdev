import { Project } from "../../lib/Project";
import icon from "./icon.webp";
import image1 from "./image-1.webp";
import image2 from "./image-2.webp";
import image3 from "./image-3.webp";

export const ninaCarducci: Project = {
  icon,
  title: "Nina Carducci - Photographe",
  description:
    "Portfolio de la photographe Nina Carducci optimisé en SEO pour un meilleur référencement.",
  github: "https://github.com/purplnay/nina-carducci.github.io",
  url: "https://purplnay.github.io/nina-carducci.github.io/",
  text: (
    <>
      <p>
        Dans le cadre de la formation Développeur Web d'
        <a href="https://openclassrooms.com" target="_blank">
          OpenClassrooms
        </a>
        , <strong>l'optimisation</strong> d'un site web déjà existant.
      </p>
      <p>
        Le portfolio a été analysé avec différents outils tels que{" "}
        <a href="https://gtmetrix.com/">
          <strong>GTmetrix</strong>
        </a>
        , <strong>Google Lighthouse</strong>, <strong>WAVE</strong> et{" "}
        <strong>Color Contrast Analyzer</strong>. Cela a permis de voir les
        points à améliorer pour le <strong>référencement</strong> du portfolio
        ainsi que son <strong>accessibilité</strong>.
      </p>
      <p>
        Certains contrastes de couleurs ont été ajustés, l'ajout des metadonnées
        pour les réseaux sociaux, les données{" "}
        <a href="https://schema.org/" target="_blank">
          Schema.org
        </a>{" "}
        ainsi que la correction de certains bugs.
      </p>
    </>
  ),
  images: [image1, image2, image3],
  tags: ["JavaScript", "CSS", "SEO"],
};
