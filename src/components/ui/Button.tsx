import type { LucideIcon } from "lucide-react";

type ButtonProps = {
  label: string;
  url: string;
  variant?: "default" | "glass" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
};

export default function Button({
  label,
  url,
  variant = "default",
  size = "md",
  icon: Icon,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl font-medium transition";
  const variants = {
    default: "bg-moon-rose text-moon-white hover:opacity-90",
    glass:
      "bg-moon-white/40 backdrop-blur-sm text-moon-contrast border border-moon-contrast/20 hover:bg-moon-white/60",
    outline:
      "border border-moon-contrast text-moon-contrast hover:bg-moon-contrast hover:text-moon-white",
  };
  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
  };

  return (
    <div className="text-center py-4">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}
      >
        {Icon && <Icon className="mr-2 h-5 w-5" />}
        {label}
      </a>
    </div>
  );
}
