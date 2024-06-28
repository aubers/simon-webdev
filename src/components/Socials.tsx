import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Socials() {
  return (
    <ul className="flex justify-end gap-x-4 py-2 text-xl">
      <li>
        <a
          href="https://www.linkedin.com/in/simonauber/"
          rel="noreferrer"
          target="_blank"
        >
          <AiFillLinkedin />
          <span className="sr-only">LinkedIn</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/aubers" rel="noreferrer" target="_blank">
          <AiFillGithub />
          <span className="sr-only">GitHub</span>
        </a>
      </li>
    </ul>
  );
}
