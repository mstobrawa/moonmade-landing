import { Instagram } from "lucide-react";

type ButtonProps = {
  url: string;
  label: string;
};

export default function Button({ url, label }: ButtonProps) {
  return (
    <div className="bg-moon-cream py-8 px-4 text-center">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-moon-contrast bg-moon-rose px-6 py-3 text-xl font-semibold text-moon-contrast backdrop-blur-md transition hover:bg-moon-rose-light hover:scale-105"
      >
        <Instagram className="w-6 h-6" />
        {label}
      </a>
    </div>
  );
}
