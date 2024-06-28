import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-y-10">
      <h1 className="text-xl">404 - Cette page n'existe pas.</h1>
      <Link
        to="/"
        className="text-primary flex items-center gap-x-1 hover:underline"
      >
        <AiOutlineArrowLeft />
        <span>Aller à l'accueil</span>
      </Link>
    </main>
  );
}
