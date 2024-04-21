"use client";

import { BlockType, ItemType, LinkPropsType } from "@/lib/types";
import FlipCard from "@/ui/cards/flip-card";
import SectionTitle from "@/ui/section-title";
import SwiperCarousel from "@/ui/swipers/swiper-carousel";
import SectionWrapper from "@/ui/wrappers/section-wrapper";
import { SwiperSlide } from "swiper/react";
import { BenefitType } from "./benefits";
import BasicCardLink from "@/ui/links/basic-card-link";

export interface HowToApplyPropTypes extends BlockType {
  header: ItemType;
  steps: BenefitType[];
  ctaLink: LinkPropsType;
}

const HowToApply = ({ data }: { data: HowToApplyPropTypes }) => {
  const { header, steps, ctaLink } = data;

  return (
    <SectionWrapper>
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
      <BasicCardLink link={ctaLink} />
    </SectionWrapper>
  );
};

export default HowToApply;
