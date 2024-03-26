import { BlockType, HeaderProps } from "@/lib/types";
import clsx from "clsx";

export interface JoinUsPropTypes extends BlockType {
  header: HeaderProps;
}

const JoinUs = ({ data }: { data: JoinUsPropTypes }) => {
  const {
    header: { title, paragraph },
  } = data;

  return (
    <section className="p-5">
      <div className="flex max-w-screen-2xl mx-auto flex-col h-72 sm:h-96 gap-6 justify-center items-center">
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="text-3xl sm:text-5xl font-extrabold">{title}</div>
          <div className="text-sm sm:text-lg w-[70%] text-center">
            {paragraph}
          </div>
        </div>
        <div className="border-[0.4px] pl-1 shadow-md rounded-md flex relative border-blue">
          <div className="flex flex-col gap-1 min-w-48 sm:min-w-64 p-1">
            <label className="text-xs font-semibold text-blue">Email</label>
            <input
              type="email"
              className="outline-none text-xs text-darkGray"
              name="subscribe"
              id="subscribe"
              placeholder="your@gmail.com"
            />
          </div>
          <button
            className={clsx(
              "bg-blue py-2 px-6 text-white rounded-r-md font-bold",
              "hover:bg-gradient-to-tr hover:from-[#04befe] hover:via-[#25aae1] bg-opacity-95"
            )}
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
