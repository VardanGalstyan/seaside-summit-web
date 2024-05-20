"use client";

import { BlockType, HeaderType, ImageType } from "@/lib/types";
import { SwiperSlide } from "swiper/react";
import SectionWrapper from "@/ui/wrappers/section-wrapper";
import SwiperCarousel from "@/ui/swipers/swiper-carousel";
import SectionTitle from "@/ui/section-title";
import Image from "next/image";

export interface PartnerType {
  createdAt: string;
  id: number;
  info: string;
  name: string;
  partnerId: string;
  publishedAt: string;
  status: string;
  updatedAt: string;
  url: string;
  videoUrl: string;
  logo: ImageType;
}

export interface ParterSwiperPropTypes extends BlockType {
  header: HeaderType;
  partners: PartnerType[];
}

const ParterSwiper = ({ data }: { data: ParterSwiperPropTypes }) => {
  const { header, partners } = data;
  const iconsPerView = partners.length < 6 ? partners.length : 7;
  console.log("🚀 ~ ParterSwiper ~ iconsPerView:", iconsPerView);

  return (
    <SectionWrapper>
      <SectionTitle title={header?.title} />
      <div className="flex-grow w-full flex h-full">
        <SwiperCarousel slidesPerView={iconsPerView} loop freemode autoplay>
          {partners.map((item) => (
            <SwiperSlide key={`${item.id}-${item.logo.alternativeText}`}>
              <div className="w-36 mb-8 relative aspect-video">
                <Image
                  className="object-contain"
                  src={item.logo.url}
                  fill
                  alt={item.logo.alternativeText ?? ""}
                  sizes={`width: ${item.logo.width}, height: ${item.logo.height}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </SwiperCarousel>
      </div>
    </SectionWrapper>
  );
};

export default ParterSwiper;
