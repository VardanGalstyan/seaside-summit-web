"use client";

import { BlockType, HeaderType, LinkType, StepType } from "@/lib/types";
import FlipCard from "@/ui/cards/flip-card";
import BasicCardLink from "@/ui/links/basic-card-link";
import SectionTitle from "@/ui/section-title";
import SwiperCarousel from "@/ui/swipers/swiper-carousel";
import SectionWrapper from "@/ui/wrappers/section-wrapper";
import { SwiperSlide } from "swiper/react";

export interface StepsPropTypes extends BlockType {
  header: HeaderType;
  steps: StepType[];
  ctaLink: LinkType;
}

const Steps = ({ data }: { data: StepsPropTypes }) => {
  const { header, steps, ctaLink } = data;

  return (
    <SectionWrapper>
      <SectionTitle title={header?.title} />
      <div className="w-full flex-grow">
        <SwiperCarousel slidesPerView={4}>
          {steps.map((item) => (
            <SwiperSlide key={`${item.id}-${item.icon.alternativeText}`}>
              <FlipCard data={item} />
            </SwiperSlide>
          ))}
        </SwiperCarousel>
        <BasicCardLink link={ctaLink} />
      </div>
    </SectionWrapper>
  );
};

export default Steps;
