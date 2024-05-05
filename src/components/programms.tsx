import {
  BlockType,
  ElementType,
  HeaderType,
  LinkType,
  StepType,
} from "@/lib/types";
import BasicCardLink from "@/ui/links/basic-card-link";
import SectionTitle from "@/ui/section-title";
import SectionWrapper from "@/ui/wrappers/section-wrapper";
import Image from "next/image";

export interface ProgrammPropType extends BlockType {
  header: HeaderType;
  ctaLink: LinkType;
  description: StepType;
  tracks: ElementType[];
}

const Programms = ({ data }: { data: ProgrammPropType }) => {
  const { header, ctaLink, description, tracks } = data;

  return (
    <SectionWrapper>
      <SectionTitle title={header.title} />
      <div className="h-full flex w-full justify-between">
        <div className="flex flex-col gap-3 max-w-lg h-full justify-evenly">
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold">{description?.title}</span>
            <span className="text-sm lg:text-base">
              {description.paragraph}
            </span>
          </div>
          <BasicCardLink link={ctaLink} />
        </div>
        <div className="w-full max-w-lg">
          <h2>Suggested Tracks and Technologies</h2>
          <div className="flex gap-3 flex-wrap justify-between">
            {tracks.map((item) => (
              <div key={item.id} className="w-20">
                <Image
                  width={item.icon.width}
                  height={item.icon.height}
                  alt={item.icon.alternativeText ?? ""}
                  src={item.icon.url}
                />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Programms;
