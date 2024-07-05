import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

export function BackHomeLink() {
  return (
    <Link
      to="/"
      className="flex items-center gap-x-1 text-primary hover:underline"
    >
      <AiOutlineArrowLeft className="text-primary" />
      <span>Aller à l'accueil</span>
    </Link>
  );
}
