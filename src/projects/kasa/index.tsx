import { Project } from "../../lib/Project";
import icon from "./icon.svg";
import image1 from "./image-1.webp";
import image2 from "./image-2.webp";
import image3 from "./image-3.webp";
import image4 from "./image-4.webp";
import image5 from "./image-5.webp";

export const kasa: Project = {
  icon,
  title: "Kasa",
  description:
    "Site web d'une agence de locations de vacances proposant de nombreux logements partout en France.",
  github: "https://github.com/purplnay/kasa",
  url: "https://kasa-azure-eta.vercel.app/",
  text: (
    <>
      <p>
        Durant ma formation de Développeur Web chez{" "}
        <a href="https://openclassrooms.com/" target="_blank">
          OpenClassrooms
        </a>
        , j'ai du réaliser ce site à partir d'une maquette Figma. Le but de ce
        projet était de développer une application <strong>React.js</strong>{" "}
        complète, à partir d'une maquette, en utilisant aucune libraire hors
        <strong>React Router</strong>.
      </p>
      <p>
        Le site est codé totalement en JavaScript, en utilisant{" "}
        <strong>React.js</strong>. Le routing est géré par{" "}
        <strong>React Router</strong>, les données sont chargées depuis un
        fichier JSON. Pour le CSS, <strong>SASS</strong> a été utilisé. Les
        animations sont écrites directement en <strong>SASS</strong>, sans autre
        librairie.
      </p>
    </>
  ),
  images: [image1, image2, image3, image4, image5],
  tags: ["HTML", "CSS", "SASS", "JavaScript", "React.js"],
};
