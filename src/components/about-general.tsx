import { BlockType, ElementType, LinkType } from "@/lib/types";
import BasicCardLink from "@/ui/links/basic-card-link";
import SectionWrapper from "@/ui/wrappers/section-wrapper";
import Image from "next/image";

export interface TeamPropTypes extends BlockType {
  header: ElementType;
  ctaLink: LinkType;
  videoUrl: string;
}

const AboutGeneral = ({ data }: { data: TeamPropTypes }) => {
  const { header, ctaLink, videoUrl } = data ?? {};

  return (
    <SectionWrapper classNames="flex-wrap-reverse !flex-row justify-evenly">
      <div className="flex flex-col gap-3 max-w-lg h-full justify-evenly">
        <div className="flex flex-col gap-2">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            {header?.title}
          </span>
          <span className="text-sm lg:text-base">{header?.paragraph}</span>
        </div>
        <BasicCardLink link={ctaLink} />
      </div>
      <div className="w-full max-w-lg">
        {header?.icon?.url ? (
          <Image
            src={header.icon.url}
            alt={header.icon.alternativeText ?? ""}
            width={header.icon.width}
            height={header.icon.height}
          />
        ) : (
          <iframe
            className="aspect-video w-full h-full"
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        )}
      </div>
    </SectionWrapper>
  );
};

export default AboutGeneral;
