"use client";

import { BlockType, HeaderProps, ImageType } from "@/lib/types";
import FlipCard from "@/ui/cards/flip-card";
import SectionTitle from "@/ui/section-title";
import SwiperCarousel from "@/ui/swipers/swiper-carousel";
import { SwiperSlide } from "swiper/react";

export interface BenefitType {
  id: number;
  title: string;
  value: string;
  icon: ImageType;
}

export interface BenefitsPropsType extends BlockType {
  header: HeaderProps;
  benefits: BenefitType[];
}

const Benefits = ({ data }: { data: BenefitsPropsType }) => {
  const { header, benefits } = data;

  return (
    <section className="p-5">
      <div className="max-w-screen-2xl mx-auto min-h-72 gap-8 flex flex-col justify-start items-center">
        <SectionTitle title={header?.title} />
        <div className="w-full">
          <SwiperCarousel>
            {benefits.map((item) => (
              <SwiperSlide key={item.id}>
                <FlipCard data={item} />
              </SwiperSlide>
            ))}
          </SwiperCarousel>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
