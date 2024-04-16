import { BlockType, LinkPropsType } from "@/lib/types";
import BasicCardLink from "@/ui/links/basic-card-link";
import Image from "next/image";

interface StatsType {
  id: number;
  title: string;
  value: string;
}

export interface StatsPropsType extends BlockType {
  stats: StatsType[];
  imageUrl: string;
  ctaLink: LinkPropsType;
}

const Spotlight = ({ data }: { data: StatsPropsType }) => {
  const { title, imageUrl, ctaLink } = data;

  return (
    <section className="p-5">
      <div className="max-w-screen-2xl mx-auto gap-5 px-2 lg:px-5 py-5 flex flex-col justify-center items-center">
        <div className="text-xl text-center font-semibold text-darkGray">
          {title}
        </div>
        <div className="flex flex-col w-full sm:w-2/3 items-center p-1 lg:p-5">
          <div className="relative aspect-video w-full h-full">
            <Image
              src={imageUrl}
              className="w-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              alt="world-map"
            />
          </div>
          <div className="flex text-xs flex-wrap gap-4 p-2 items-center justify-center">
            <div className="flex justify-center gap-2 items-center">
              <span className="h-5 w-5 bg-blue"></span>
              <span>Past event locations</span>
            </div>
            <div className="flex justify-center gap-2 items-center">
              <span className="h-5 w-5 bg-yellow-500"></span>
              <span> Upcoming event locations</span>
            </div>
          </div>
        </div>
        <BasicCardLink link={ctaLink} />
      </div>
    </section>
  );
};

export default Spotlight;
