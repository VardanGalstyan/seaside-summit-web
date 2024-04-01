"use client";

import { useAtom } from "jotai";
import { GrNext, GrPrevious } from "react-icons/gr";
import { GalleryType } from ".";
import { galleryIndexAtom } from "./state";

const GallerySelector = ({ galleries }: { galleries: GalleryType[] }) => {
  const [currentIndex, setIndex] = useAtom(galleryIndexAtom);

  const currentGallery = galleries?.[currentIndex];

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % galleries.length);
  };

  const handlePrevious = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + galleries.length) % galleries.length
    );
  };

  const isMultipleEvents = galleries.length >= 2;

  //TODO change the slug to event name
  return (
    <div className="flex justify-between items-center w-full">
      <div className="text-2xl uppercase font-bold">{currentGallery?.slug}</div>
      {isMultipleEvents && (
        <div className="flex gap-2">
          <GrPrevious
            className="border transition-colors duration-500 p-3 h-10 w-10 cursor-pointer hover:bg-darkBlue hover:text-white"
            onClick={handlePrevious}
          />
          <GrNext
            className="border transition-colors duration-500 p-3 h-10 w-10 cursor-pointer hover:bg-darkBlue hover:text-white"
            onClick={handleNext}
          />
        </div>
      )}
    </div>
  );
};

export default GallerySelector;
