import { BlockType, LinkType, StepType } from "@/lib/types";
import BasicCardLink from "@/ui/links/basic-card-link";
import SectionTitle from "@/ui/section-title";
import SectionWrapper from "@/ui/wrappers/section-wrapper";

export interface StatsPropsType extends BlockType {
  stats: StepType[];
  ctaLink: LinkType;
}

const Statistics = ({ data }: { data: StatsPropsType }) => {
  const { stats, title = "", ctaLink } = data;

  return (
    <SectionWrapper classNames="justify-evenly items-center">
      <SectionTitle title={title} />
      <div className="flex flex-wrap flex-grow justify-center gap-5  w-full items-center">
        {stats.map((item) => (
          <div
            key={item.id}
            className="flex justify-center flex-col items-center"
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl px-5 font-bold">
              {item.paragraph}
            </div>
            <div className="uppercase text-darkGray text-md lg:text-lg">
              {item.title}
            </div>
          </div>
        ))}
      </div>
      <BasicCardLink link={ctaLink} />
    </SectionWrapper>
  );
};

export default Statistics;
