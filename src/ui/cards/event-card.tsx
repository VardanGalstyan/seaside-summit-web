import { EventType } from "@/app/(pages)/events/types";
import BasicCardLink from "../links/basic-card-link";
import Image from "next/image";

const EventCard = ({ data }: { data: EventType }) => {
  return (
    <div className="max-w-96 shadow-lg p-2 aspect-[6/3]">
      <Image
        className="object-cover"
        src={data.cover.url}
        width={data.cover.width}
        height={data.cover.height}
        alt={data.cover.alternativeText ?? ""}
      />
      <div className="flex flex-col gap-3 h-full items-center justify-evenly">
        <span className="text-lg uppercase font-bold">{`- ${data.title} -`}</span>
        <span className="text-darkGray font-light">{data.country}</span>
        <span className="text-darkGray font-light">{data.startDate}</span>
        <BasicCardLink
          link={{ href: `events/${data.slug}`, title: "See More" }}
        />
      </div>
    </div>
  );
};

export default EventCard;
