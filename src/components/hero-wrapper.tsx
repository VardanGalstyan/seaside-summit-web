"use client";

import Image from "next/image";
import { ParallaxProvider, useParallax } from "react-scroll-parallax";

const HeroWrapper = () => {
  return (
    <div className="relative overflow-hidden h-[90vh]">
      <ParallaxProvider>
        <TestParallax />
        <section className="absolute h-full w-full flex justify-center items-center text-white">
          Hero Section
        </section>
      </ParallaxProvider>
    </div>
  );
};

export const TestParallax = () => {
  const { ref } = useParallax<HTMLDivElement>({
    speed: -50,
    translateY: [-111.3, 100],
  });

  return (
    <div ref={ref} className="absolute w-full h-full">
      <Image
        className="object-cover"
        alt="Image"
        sizes="100vw, 50vw, 33vw"
        fill
        src="https://www.seasidestartupsummit.com/assets/media/bg.6ca3fdd4.jpg"
      />
    </div>
  );
};

export default HeroWrapper;
