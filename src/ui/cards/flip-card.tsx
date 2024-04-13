import { BenefitType } from "@/components/benefits";
import Image from "next/image";

const FlipCard = ({ data }: { data: BenefitType }) => {
  const { icon, title, value } = data;

  return (
    <div className="flex flex-col mb-10 text-center justify-center items-center gap-2 p-2 w-[280px]">
      <Image
        className="w-24 aspect-square object-contain mb-3"
        src={icon.url}
        alt={icon?.alternativeText ?? ""}
        width={icon.width}
        height={icon.height}
      />
      <span className="font-bold">{title}</span>
      <span className="text-[14px] text-center">{value}</span>
    </div>
  );
};

export default FlipCard;
