type HeroProps = {
  withLove: string;
  catchPhrase: string;
};

export default function Hero({ withLove, catchPhrase }: HeroProps) {
  return (
    <section className="bg-moon-contrast text-moon-cream text-center py-16 px-4">
      <h2 className="text-4xl font-playfair mb-4 tracking-wide">{withLove}</h2>
      <p className="text-lg tracking-wide font-playfair">{catchPhrase}</p>
    </section>
  );
}
