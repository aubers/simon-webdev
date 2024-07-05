import { Project } from "../../lib/Project";
import icon from "./icon.webp";
import desktop from "./desktop.webp";
import mobile from "./mobile.webp";

export const genshinTeamRandomizer: Project = {
  icon,
  title: "Genshin Team Randomizer",
  description:
    "Un site web pour générer des équipes aléatoires pour le jeu Genshin Impact.",
  tags: ["React.js", "Next.js", "TypeScript", "TailwindCSS"],
  images: [desktop, mobile],
  github: "https://github.com/purplnay/genshin-team-randomizer",
  url: "https://genshin-team-randomizer.vercel.app/",
  text: (
    <>
      <p>
        Genshin Team Randomizer est un projet <strong>open-source</strong>{" "}
        disponible sur{" "}
        <strong>
          <a
            href="https://github.com/purplnay/genshin-team-randomizer"
            target="_blank"
          >
            GitHub
          </a>
        </strong>
        . Il vise à assister les joueurs du{" "}
        <strong>jeu-video Genshin Impact</strong> pour trouver une équipe de
        personnages <strong>tirés au hasard</strong> &#40;à partir d'une
        sélection de l'utilisateur&#41; afin de pouvoir augmenter la difficulté
        du contenu du jeu.
      </p>

      <p>
        Le site est développé en <strong>TypeScript</strong>, avec{" "}
        <strong>React.js</strong> sur le framework <strong>Next.js</strong>. Il
        utilise également <strong>TailwindCSS</strong> pour l'interface et{" "}
        <strong>Vercel</strong> pour le déploiement. Le site permet de{" "}
        <strong>trier les personnages</strong> à partir de{" "}
        <strong>différents critères</strong> puis de <strong>générer</strong>{" "}
        une équipe aléatoire. Les choix de séléction sont{" "}
        <strong>persistés</strong> dans le LocalStorage du navigateur. Le site
        utilise la base de données <strong>GenshinDB</strong>, en local, via
        NPM. Le site est <strong>mis à jour</strong> à chaque patch du jeu,
        lorsque de nouveaux personnages font leur apparition dans le jeu.
      </p>
    </>
  ),
};
