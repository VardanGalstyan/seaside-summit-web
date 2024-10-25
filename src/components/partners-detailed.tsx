"use client";

import { BlockType, ElementType, ImageType } from "@/lib/types";
import { SwiperSlide } from "swiper/react";
import SectionWrapper from "@/ui/wrappers/section-wrapper";
import SwiperCarousel from "@/ui/swipers/swiper-carousel";
import SectionTitle from "@/ui/section-title";
import Image from "next/image";
import Link from "next/link";

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

export interface PartnersDetailedProptypes extends BlockType {
  header: ElementType;
  partners: PartnerType[];
}

const PartnersDetailed = ({ data }: { data: PartnersDetailedProptypes }) => {
  const { header, partners } = data;

  return (
    <SectionWrapper>
      <SectionTitle title={header?.title} />
      <div className="w-full self-center flex-grow flex h-full items-center lg:text-center content-center">
        <SwiperCarousel slidesPerView={1} autoplay>
          {partners
            .filter((partner) => !!partner.videoUrl)
            .map((item) => (
              <SwiperSlide
                className="mb-10"
                key={`${item.id}-${item.logo.alternativeText}`}
              >
                <div className="w-full h-full gap-3 flex flex-wrap-reverse justify-evenly items-center">
                  <div className="flex flex-col gap-3 max-w-lg h-full justify-evenly">
                    <div className="flex flex-col gap-2">
                      <span className="font-bold flex  max-h-16 lg:items-center lg:justify-center">
                        <Image
                          className="max-w-32 aspect-video object-contain"
                          src={item.logo.url}
                          alt={item.logo.alternativeText ?? ""}
                          width={item.logo.width}
                          height={item.logo.height}
                        />
                      </span>
                      <span className="text-sm lg:text-base">{item.info}</span>
                    </div>
                    <div className="flex flex-col">
                      <Link
                        href={item.url}
                        target="blank"
                        className="font-bold"
                      >
                        {item.name}
                      </Link>
                      <span className="text-sm text-darkGray">
                        {item.status}
                      </span>
                    </div>
                  </div>
                  <div className="w-full max-w-lg">
                    <iframe
                      className="aspect-video w-full h-full"
                      src={item.videoUrl}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </SwiperCarousel>
      </div>
    </SectionWrapper>
  );
};

export default PartnersDetailed;
