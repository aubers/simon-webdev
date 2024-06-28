import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

export function BackHomeLink() {
  return (
    <Link
      to="/"
      className="text-primary flex items-center gap-x-1 hover:underline"
    >
      <AiOutlineArrowLeft />
      <span>Aller à l'accueil</span>
    </Link>
  );
}
