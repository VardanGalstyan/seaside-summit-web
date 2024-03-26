import { BlockType, LinkProps } from "@/lib/types";
import BasicCardLink from "@/ui/links/basic-card-link";

interface StatsType {
  id: number;
  title: string;
  value: string;
}

export interface StatsPropsType extends BlockType {
  stats: StatsType[];
  ctaLink: LinkProps;
}

const Statistics = ({ data }: { data: StatsPropsType }) => {
  const { stats, title, ctaLink } = data;

  return (
    <section className="p-5">
      <div className="max-w-screen-2xl mx-auto flex min-h-96 flex-col h-full justify-evenly items-center gap-5">
        <div className="text-xl text-center font-semibold text-darkGray">
          {title}
        </div>
        <div className="flex flex-wrap justify-center gap-5  w-full items-center">
          {stats.map((item) => (
            <div
              key={item.id}
              className="flex justify-center flex-col items-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl px-5 font-bold">
                {item.value}
              </div>
              <div className="uppercase text-darkGray text-md lg:text-lg">
                {item.title}
              </div>
            </div>
          ))}
        </div>
        <BasicCardLink link={ctaLink} />
      </div>
    </section>
  );
};

export default Statistics;
