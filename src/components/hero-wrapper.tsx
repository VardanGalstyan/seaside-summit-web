const HeroWrapper = () => {
  const imageUrl =
    "https://www.seasidestartupsummit.com/assets/media/bg.6ca3fdd4.jpg";

  return (
    <section
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="h-[90vh] bg-cover bg-fixed bg-center bg-no-repeat w-full"
    >
      Hero Section
    </section>
  );
};

export default HeroWrapper;
