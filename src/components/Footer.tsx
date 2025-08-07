import { Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-moon-cream py-6 px-4 text-moon-contrast text-sm flex flex-col items-center gap-4 select-none">
      {/* Ikony w rzędzie */}
      <div className="flex gap-8">
        <a
          href="https://www.instagram.com/moonmade.pl/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-moon-rose transition"
        >
          <Instagram size={32} />
        </a>

        <a
          href="mailto:kontakt@moonmade.pl"
          aria-label="Email"
          className="hover:text-moon-rose transition"
        >
          <Mail size={32} />
        </a>
      </div>

      {/* Napis pod ikonami */}
      <span className="text-moon-contrast font-playfair tracking-wide text-center">
        © 2025 moonmade.pl – wszelkie prawa zastrzeżone
      </span>
    </footer>
  );
}
