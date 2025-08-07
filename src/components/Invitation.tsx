type InvitationProps = {
  info: string;
};

export default function Invitation({ info }: InvitationProps) {
  return (
    <section className="bg-moon-cream text-center px-4">
      <h2 className="font-playfair text-moon-rose-dark text-2xl tracking-wide">
        {info}
      </h2>
    </section>
  );
}
