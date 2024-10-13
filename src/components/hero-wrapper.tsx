"use client";

import Image from "next/image";
import { ParallaxProvider, useParallax } from "react-scroll-parallax";

const HeroWrapper = () => {
  // pass this values from a higher level
  const image =
    'https://www.seasidestartupsummit.com/assets/media/bg.6ca3fdd4.jpg';
  const altText = 'Torch in a hand of a man';

  return (
    <div className="relative overflow-hidden h-[90vh]">
      <ParallaxProvider>
        <ParallaxScrollEffect image={image} altText={altText} />
        <section className="absolute h-full w-full flex justify-center items-center text-white">
          Hero Section
        </section>
      </ParallaxProvider>
    </div>
  );
};

export const ParallaxScrollEffect = ({
  image,
  altText,
}: {
  image: string;
  altText: string;
}) => {
  const { ref: parallaxRef } = useParallax<HTMLDivElement>({
    speed: -50,
    translateY: [-111.3, 100],
  });

  return (
    <div ref={parallaxRef} className="absolute w-full h-full">
      <Image className="object-cover" alt={altText} fill src={image} />
    </div>
  );
};

export default HeroWrapper;
