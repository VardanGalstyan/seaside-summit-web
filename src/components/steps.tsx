"use client";

import { BlockType, HeaderType, LinkType, StepType } from "@/lib/types";
import FlipCard from "@/ui/cards/flip-card";
import BasicCardLink from "@/ui/links/basic-card-link";
import SectionTitle from "@/ui/section-title";
import SwiperCarousel from "@/ui/swipers/swiper-carousel";
import SectionWrapper from "@/ui/wrappers/section-wrapper";
import { headers } from "next/headers";
import { usePathname } from "next/navigation";
import { SwiperSlide } from "swiper/react";

export interface StepsPropTypes extends BlockType {
  header: HeaderType;
  steps: StepType[];
  ctaLink: LinkType;
}

const Steps = ({ data, slug }: { data: StepsPropTypes; slug?: string }) => {
  const { header, steps, ctaLink } = data ?? {};

  if (!data) {
    return null;
  }

  if (ctaLink) {
    ctaLink.href =
      slug && !ctaLink.isExternal
        ? `events/${slug}/${ctaLink?.href}`
        : ctaLink.href;
  }

  return (
    <SectionWrapper>
      <SectionTitle title={header?.title} />
      <div className="w-full h-full flex flex-grow items-baseline">
        <SwiperCarousel slidesPerView={steps?.length}>
          {steps?.map((item) => (
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

export default Steps;
