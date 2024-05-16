import { HeaderType } from "@/lib/types";

const SectionTitle = ({ title = "", description = "" }: HeaderType) => {
  return (
    <div className="text-2xl sm:text-3xl lg:text-4xl flex font-extrabold flex-col text-center uppercase text-dark">
      <span>{title}</span>
      {description && (
        <span className="text-sm sm:text-base lg:text-lg">{`- ${description} -`}</span>
      )}
    </div>
  );
};

export default SectionTitle;
