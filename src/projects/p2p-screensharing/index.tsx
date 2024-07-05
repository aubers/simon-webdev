import { Project } from "../../lib/Project";
import icon from "./icon.webp";
import desktopHomepage from "./desktop-homepage.webp";
import desktopStream from "./desktop-stream.webp";
import homepage from "./homepage.webp";
import joiningRequest from "./joining-request.webp";
import joiningWaiting from "./joining-waiting.webp";
import streaming from "./streaming.webp";
import waitingRoom from "./waiting-room.webp";

export const p2pScreensharing: Project = {
  icon,
  title: "P2P Screensharing",
  description:
    "Une application de partage d'écran et discussion, en peer-to-peer.",
  images: [
    desktopHomepage,
    desktopStream,
    homepage,
    joiningRequest,
    joiningWaiting,
    streaming,
    waitingRoom,
  ],
  tags: ["Vue", "TypeScript", "TailwindCSS"],
  github: "https://github.com/purplnay/p2p-screensharing",
  url: "https://p2p-screensharing.vercel.app/",
  text: (
    <>
      <p>
        P2P Screensharing est une application web de{" "}
        <strong>partage d'écran</strong>, en <strong>peer-to-peer</strong>, sans
        aucun besoin de back-end. Elle permet à deux utilisateurs de se{" "}
        <strong>rejoindre</strong> dans une{" "}
        <strong>salle de discussion privée</strong>, ayant leurs appareils se
        connectant directement entre-eux par internet. L'application permet de
        <strong>diffuser son écran</strong>, une fenêtre ou un onglet, tout en
        <strong>discutant</strong> via le chat.
      </p>

      <p>
        L'application est <strong>open-source</strong> et disponible sur{" "}
        <strong>
          <a
            href="https://github.com/purplnay/p2p-screensharing"
            target="_blank"
          >
            GitHub
          </a>
        </strong>
        . Elle est développée avec <strong>Vue.js</strong> dans un projet créé
        avec <strong>Vite</strong>. L'UI est codée en utilisant{" "}
        <strong>TailwindCSS</strong> ainsi que du <strong>CSS natif</strong>{" "}
        pour certaines animations. Le langage utilisé est{" "}
        <strong>TypeScript</strong> et la connexion en peer-to-peer est
        effectuée avec la librairie <strong>PeerJS</strong>. L'application est
        deployée sur <strong>Vercel</strong>.
      </p>
    </>
  ),
};
