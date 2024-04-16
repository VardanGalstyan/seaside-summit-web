import { BlockType, HeaderPropsType, LinkPropsType } from "@/lib/types";
import BasicCardLink from "@/ui/links/basic-card-link";
import SectionTitle from "@/ui/section-title";
import clsx from "clsx";

interface PromiseTypes {
  id: number;
  title: string;
  paragraph: string;
}

export interface PromisePropTypes extends BlockType {
  header: HeaderPropsType;
  promise: PromiseTypes[];
  ctaLink: LinkPropsType;
}

const Promise = ({ data }: { data: PromisePropTypes }) => {
  const { header, promise, ctaLink } = data;

  const promiseColors = ["lightBlue", "blue", "red", "orange"];

  return (
    <section className="p-5">
      <div className="max-w-screen-2xl h-96 mx-auto gap-5 flex flex-col justify-evenly items-center">
        <SectionTitle title={header?.title} />
        <div className="flex flex-wrap w-full items-baseline justify-center sm:justify-evenly gap-3">
          {promise.map((item, i) => (
            <div
              className="flex-col flex gap-3 max-w-36 sm:max-w-56 lg:max-w-64 text-center sm:text-start"
              key={`${item.id}-${item.title}`}
            >
              <span
                className={clsx(
                  "text-3xl sm:text-4xl lg:text-5xl font-bold",
                  `text-${promiseColors[i]}`
                )}
              >
                {item.title}
              </span>
              <span className="text-xs sm:text-sm lg:text-base font-extralight">
                {item.paragraph}
              </span>
            </div>
          ))}
        </div>
        <BasicCardLink link={ctaLink} />
      </div>
    </section>
  );
};

export default Promise;
