import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="mx-4 my-6 flex items-center justify-between lg:mx-0">
      <Socials />
      <p className="text-sm text-white/80">© 2023 Simon Auber</p>
    </footer>
  );
}
