import { BlockType, ElementType } from "@/lib/types";
import SectionTitle from "@/ui/section-title";

export interface JoinOurTeamPropTypes extends BlockType {
  header: ElementType;
}

const JoinOurTeam = ({ data }: { data: JoinOurTeamPropTypes }) => {
  const { header } = data;
  return (
    <section className="p-5">
      <div className="max-w-screen-2xl mx-auto min-h-72  gap-3 flex flex-col justify-start items-center">
        <SectionTitle title={header?.title} paragraph={header?.paragraph} />
        <div className="text-center flex-grow font-thin h-full flex justify-center items-center">
          <span>There are no current openings, please check back soon</span>
        </div>
      </div>
    </section>
  );
};

export default JoinOurTeam;
