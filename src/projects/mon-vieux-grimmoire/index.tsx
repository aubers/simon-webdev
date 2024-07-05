import { Project } from "../../lib/Project";
import icon from "./icon.svg";
import image1 from "./image-1.webp";
import image2 from "./image-2.webp";
import image3 from "./image-3.webp";
import image4 from "./image-4.webp";

export const monVieuxGrimmoire: Project = {
  icon,
  title: "Mon Vieux Grimmoire (API)",
  description:
    "L'API d'un site de notation de livres. Avec authentification et création de compte utilisateur et actions CRUD sur une ressource.",
  url: "https://github.com/purplnay/mon-vieux-grimmoire-api",
  text: (
    <>
      <p>
        L'API de Mon Vieux Grimmoire a été créée dans le cadre d'un projet sur
        la formation de Développeur Web d'
        <a href="https://openclassrooms.com/" target="_blank">
          OpenClassrooms
        </a>
        .
      </p>
      <p>
        Le projet consiste en la création d'une API avec{" "}
        <strong>Express</strong> et <strong>MongoDB</strong> qui sera utilisée
        par le front-end. Une spécification de l'API ainsi qu'une application
        React.js pour le front sont fournis.
      </p>
      <p>
        Le back-end doit permettre la création de comptes utilisateurs, la
        connexion à un compte, l'utilisation des <strong>JSON Web Token</strong>{" "}
        ainsi que la sécurisation des données utilisateurs en{" "}
        <strong>chiffrant</strong> les mots de passes et en s'assurant de
        l'uniqueté des adresses emails.
      </p>
    </>
  ),
  images: [image1, image2, image3, image4],
  tags: ["JavaScript", "Node.js", "MongoDB", "Express"],
};
