"use client";

import { BlockType, HeaderPropsType, ImageType } from "@/lib/types";
import FlipCard from "@/ui/cards/flip-card";
import SectionTitle from "@/ui/section-title";
import SwiperCarousel from "@/ui/swipers/swiper-carousel";
import { SwiperSlide } from "swiper/react";

export interface HowToApplyType {
  id: number;
  title: string;
  value: string;
  icon: ImageType;
}

export interface HowToApplyPropTypes extends BlockType {
  header: HeaderPropsType;
  steps: HowToApplyType[];
}

const HowToApply = ({ data }: { data: HowToApplyPropTypes }) => {
  const { header, steps } = data;

  return (
    <section className="p-5">
      <div className="max-w-screen-2xl mx-auto min-h-72 gap-8 flex flex-col justify-start items-center">
        <SectionTitle title={header?.title} />
        <div className="w-full">
          <SwiperCarousel slidesPerView={4}>
            {steps.map((item) => (
              <SwiperSlide key={`${item.id}-${item.icon.alternativeText}`}>
                <FlipCard data={item} />
              </SwiperSlide>
            ))}
          </SwiperCarousel>
        </div>
      </div>
    </section>
  );
};

export default HowToApply;
