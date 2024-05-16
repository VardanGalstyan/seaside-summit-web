import Link from "next/link";
import Image from "next/image";
import WeatherBlock from "./weather-block";
import SectionTitle from "@/ui/section-title";
import SectionWrapper from "@/ui/wrappers/section-wrapper";

import { headers } from "next/headers";
import { infoNav } from "./data";
import { InfoCollectionType } from "@/lib/types";
import { InformationType } from "./types";

const Information = ({
  data,
  query = { category: "amenities" },
}: {
  data: InformationType;
  query?: { category: keyof InformationType };
}) => {
  const heads = headers();
  const pathname = heads.get("next-url");

  return (
    <SectionWrapper>
      <SectionTitle title={data.header.title} />
      <div className="flex flex-col lg:flex-row w-full justify-between gap-2">
        <div className="w-full">
          <h2>{data.paragraph.title}</h2>
          <p>{data.paragraph.description}</p>
          <div className="flex flex-col gap-2 w-full">
            {infoNav.map((item) => (
              <Link
                scroll={false}
                key={item.title}
                href={{ pathname, query: { category: item.query } }}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full">
          {infoNav
            .filter((navItem) => navItem.query === query.category)
            .map((navItem) => (
              <span key={navItem.query}>{navItem.title}</span>
            ))}
          <div className="flex gap-3 flex-wrap">
            {query.category !== "weather" ? (
              (data[query.category] as InfoCollectionType[])?.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-start items-center max-h-24 w-52 gap-2 p-2"
                >
                  <div className="border rounded-full p-5 w-20 h-20 flex justify-center items-center">
                    <Image
                      width={item.icon.width}
                      height={item.icon.height}
                      alt={item.icon.alternativeText ?? ""}
                      src={item.icon.url}
                    />
                  </div>
                  <span className="text-md">{item.title}</span>
                </div>
              ))
            ) : (
              <WeatherBlock data={data.weather} />
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Information;
