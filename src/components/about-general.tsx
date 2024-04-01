import { BlockType, HeaderProps, LinkProps } from "@/lib/types";
import BasicCardLink from "@/ui/links/basic-card-link";

export interface TeamPropTypes extends BlockType {
  header: HeaderProps;
  ctaLink: LinkProps;
  videoUrl: string;
}

const AboutGeneral = ({ data }: { data: TeamPropTypes }) => {
  const { header, ctaLink, videoUrl } = data;

  return (
    <section className="p-5">
      <div className="max-w-screen-2xl mx-auto min-h-96  gap-3 flex flex-wrap-reverse  justify-evenly items-center">
        <div className="flex flex-col gap-3 max-w-lg h-full justify-evenly">
          <div className="flex flex-col gap-2">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              {header.title}
            </span>
            <span className="text-sm lg:text-base">{header.paragraph}</span>
          </div>
          <BasicCardLink link={ctaLink} />
        </div>
        <div className=" w-full max-w-lg">
          <iframe
            className="aspect-video w-full h-full"
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default AboutGeneral;
