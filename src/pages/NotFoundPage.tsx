import { BackHomeLink } from "../components/BackHomeLink";

export default function NotFoundPage() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-y-10">
      <h1 className="text-xl">404 - Cette page n'existe pas.</h1>
      <BackHomeLink />
    </main>
  );
}
