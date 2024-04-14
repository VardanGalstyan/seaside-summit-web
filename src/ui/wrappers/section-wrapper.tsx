import clsx from "clsx";
import { ReactNode } from "react";

const SectionWrapper = ({
  children,
  classNames,
}: {
  children: ReactNode;
  classNames?: string;
}) => {
  return (
    <section className="p-5">
      <div
        className={clsx(
          "max-w-screen-2xl mx-auto min-h-96 gap-3 flex items-center",
          classNames
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
