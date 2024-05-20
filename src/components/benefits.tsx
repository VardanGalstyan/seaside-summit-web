"use client";

import { BlockType, HeaderType, StepType } from "@/lib/types";
import FlipCard from "@/ui/cards/flip-card";
import SectionTitle from "@/ui/section-title";
import SwiperCarousel from "@/ui/swipers/swiper-carousel";
import SectionWrapper from "@/ui/wrappers/section-wrapper";
import { SwiperSlide } from "swiper/react";

export interface BenefitsPropsType extends BlockType {
  header: HeaderType;
  benefits: StepType[];
}

const Benefits = ({ data }: { data: BenefitsPropsType }) => {
  const { header, benefits } = data;

  return (
    <SectionWrapper>
      <SectionTitle title={header?.title} />
      <div className="w-full flex-grow justify-center h-full flex">
        <SwiperCarousel slidesPerView={benefits.length}>
          {benefits.map((item) => (
            <SwiperSlide key={`${item.id}-${item.icon.alternativeText}`}>
              <FlipCard data={item} />
            </SwiperSlide>
          ))}
        </SwiperCarousel>
      </div>
    </SectionWrapper>
  );
};

export default Benefits;
