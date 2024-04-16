"use client";

import { BlockType, HeaderPropsType, ImageType } from "@/lib/types";
import SectionTitle from "@/ui/section-title";
import SwiperCarousel from "@/ui/swipers/swiper-carousel";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

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

export interface PartnersDetailedPropTypes extends BlockType {
  header: HeaderPropsType;
  partners: PartnerType[];
}

const PartnersDetailed = ({ data }: { data: PartnersDetailedPropTypes }) => {
  const { header, partners } = data;

  return (
    <section className="p-5">
      <div className="max-w-screen-2xl mx-auto min-h-72 gap-8 flex flex-col justify-start items-center">
        <SectionTitle title={header?.title} />
        <div className="flex-grow w-full flex justify-center items-center">
          <div className="w-full self-center items-center text-center content-center">
            <SwiperCarousel slidesPerView={8} loop freemode autoplay>
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
        </div>
      </div>
    </section>
  );
};

export default PartnersDetailed;
