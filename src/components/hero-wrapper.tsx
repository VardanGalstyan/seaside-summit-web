'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const HeroWrapper = () => {
  // pass this values from a higher level
  const image =
    'https://www.seasidestartupsummit.com/assets/media/bg.6ca3fdd4.jpg';
  const altText = 'Torch in a hand of a man';

  return (
    <div className="relative overflow-hidden h-[90vh]">
      <ParallaxScrollEffect image={image} altText={altText} />
      <section className="absolute h-full w-full flex justify-center items-center text-white">
        Hero Section
      </section>
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
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      className="absolute w-full h-full"
    >
      <Image className="object-cover" alt={altText} fill src={image} />
    </div>
  );
};

export default HeroWrapper;
