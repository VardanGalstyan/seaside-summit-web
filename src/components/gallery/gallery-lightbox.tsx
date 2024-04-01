"use client";

import { useState } from "react";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import {
  Fullscreen,
  Slideshow,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";

import { ImageType } from "@/lib/types";

interface LightboxType {
  src: string;
  width: number;
  height: number;
}

export default function GalleryLightBox({ images }: { images: ImageType[] }) {
  const [index, setIndex] = useState(-1);

  const photos: LightboxType[] = images.map((photo) => ({
    width: photo.width,
    height: photo.height,
    src: photo.url,
  }));

  return (
    <div className="w-full h-full">
      <PhotoAlbum
        photos={photos}
        layout="rows"
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
}
