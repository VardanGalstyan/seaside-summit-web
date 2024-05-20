import { BlockType, HeaderType, ImageType, LinkType } from "@/lib/types";
import SectionWrapper from "@/ui/wrappers/section-wrapper";
import BasicCardLink from "@/ui/links/basic-card-link";
import SectionTitle from "@/ui/section-title";
import Image from "next/image";

export interface StatsPropsType extends BlockType {
  header: HeaderType;
  image: ImageType;
  ctaLink: LinkType;
}

const Spotlight = ({ data }: { data: StatsPropsType }) => {
  const { image, ctaLink, header } = data;

  return (
    <SectionWrapper>
      <SectionTitle title={header?.title ?? ""} />
      <div className="flex flex-col flex-grow w-full sm:w-2/3 items-center p-1 lg:p-5">
        <div className="relative aspect-video w-full h-full">
          <Image
            src={image?.url}
            className="w-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            alt="world-map"
          />
        </div>
        <div className="flex text-xs flex-wrap gap-4 p-2 items-center justify-center">
          <div className="flex justify-center gap-2 items-center">
            <span className="h-5 w-5 bg-blue" />
            <span>Past event locations</span>
          </div>
          <div className="flex justify-center gap-2 items-center">
            <span className="h-5 w-5 bg-yellow-500" />
            <span>Upcoming event locations</span>
          </div>
        </div>
      </div>
      <BasicCardLink link={ctaLink} />
    </SectionWrapper>
  );
};

export default Spotlight;
