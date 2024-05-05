import { StepType } from "@/lib/types";
import Image from "next/image";

const FlipCard = ({ data }: { data: StepType }) => {
  const { icon, title, paragraph, numberOfStep } = data;

  return (
    <div className="flex flex-col mb-10 items-center gap-2 p-2 w-[280px]">
      <Image
        className="w-24 aspect-square object-contain"
        src={icon.url}
        alt={icon?.alternativeText ?? ""}
        width={icon.width}
        height={icon.height}
      />
      <span className="font-bold uppercase text-sm">{numberOfStep}</span>
      <span className="font-bold">{title}</span>
      <span className="text-[14px] text-center">{paragraph}</span>
    </div>
  );
};

export default FlipCard;
