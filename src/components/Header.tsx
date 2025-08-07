type HeaderProps = {
  title: string;
  image: string;
};

export default function Header({ title, image }: HeaderProps) {
  return (
    <header className="bg-moon-cream text-center py-4">
      <img
        src={image}
        alt="Logo Moonmade"
        className="w-[140px] md:w-[150px] max-w-full h-auto mx-auto mb-2"
      />
      <h1 className="text-moon-rose-dark text-2xl md:text-4xl font-playfair drop-shadow-md">
        {title}
      </h1>
    </header>
  );
}
