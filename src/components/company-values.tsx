import { BlockType, ElementType, LinkType } from "@/lib/types";
import BasicCardLink from "@/ui/links/basic-card-link";
import SectionTitle from "@/ui/section-title";
import SectionWrapper from "@/ui/wrappers/section-wrapper";

export interface CompanyValuesPropTypes extends BlockType {
  header: ElementType;
  propositions: ElementType[];
  ctaLink: LinkType;
}

const CompanyValues = ({ data }: { data: CompanyValuesPropTypes }) => {
  const { header, propositions, ctaLink } = data;

  return (
    <SectionWrapper classNames="justify-evenly">
      <SectionTitle title={header?.title} />
      <div className="grid grid-cols-2 lg:grid-cols-4 w-full items-baseline justify-center gap-3">
        {propositions.map((item) => (
          <div
            className="flex-col flex gap-3 text-start sm:text-start"
            key={`${item.id}-${item.title}`}
          >
            <span
              style={{ color: item.color ?? "black" }}
              className={
                "text-3xl sm:text-4xl lg:text-5xl font-bold text-center"
              }
            >
              {item.title}
            </span>
            <span className="text-[10px] text-center sm:text-sm lg:text-base font-extralight">
              {item.paragraph.includes(",") ? (
                item.paragraph.split(",").map((item, i) => {
                  if (item === "") return null;
                  return <div key={i}>- {item} -</div>;
                })
              ) : (
                <span className="text-xs sm:text-sm lg:text-base font-extralight">
                  {item.paragraph}
                </span>
              )}
            </span>
          </div>
        ))}
      </div>
      <BasicCardLink link={ctaLink} />
    </SectionWrapper>
  );
};

export default CompanyValues;
