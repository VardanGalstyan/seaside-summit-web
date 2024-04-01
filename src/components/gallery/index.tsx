"use client";

import GalleryLightBox from "@/components/gallery/gallery-lightbox";
import { BlockType, HeaderProps, ImageType } from "@/lib/types";
import SectionTitle from "@/ui/section-title";
import { useAtomValue } from "jotai";
import GallerySelector from "./gallery-selector";
import { galleryIndexAtom } from "./state";

export interface GalleryType {
  id: number;
  eventDate: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  media: {
    data: ImageType[];
  };
}

export interface GalleryPropTypes extends BlockType {
  header: HeaderProps;
  terms: string;
  media: {
    data: GalleryType[];
  };
}

const Gallery = ({ data }: { data: GalleryPropTypes }) => {
  const { header, terms, media } = data;

  const currentIndex = useAtomValue(galleryIndexAtom);
  const currentGallery = media.data[currentIndex];

  if (!media) return null;

  return (
    <section className="p-5">
      <div className="max-w-screen-2xl mx-auto min-h-72 gap-3 flex flex-col justify-center items-center">
        <SectionTitle title={header.title} />
        <GallerySelector galleries={media.data} />
        <GalleryLightBox images={currentGallery.media.data} />
        <div className="text-xs hidden lg:block">{terms}</div>
      </div>
    </section>
  );
};

export default Gallery;