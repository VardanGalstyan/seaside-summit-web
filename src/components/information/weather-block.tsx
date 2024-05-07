import { WeatherType } from "@/lib/types";
import Image from "next/image";

const WeatherBlock = ({ data }: { data: WeatherType }) => {
  return (
    <div className="bg-red grid grid-rows-2 grid-flow-col w-full">
      <div className="border row-span-2">
        <Image
          src="/wtr0.png"
          className="p-2"
          alt="weather-celsius-sign"
          width={100}
          height={100}
        />
      </div>
      <div className="border ">
        <Image
          src="/wtr1.png"
          className="p-2"
          alt="weather-celsius-sign"
          width={70}
          height={70}
        />
      </div>
      <div className="border ">{data.day}</div>
      <div className="border ">
        <Image
          src="/wtr2.png"
          className="p-2"
          alt="weather-celsius-sign"
          width={70}
          height={70}
        />
      </div>
      <div className="border">{data.night}</div>
      <div className="border">
        <Image
          src="/wtr3.png"
          className="p-2"
          alt="weather-celsius-sign"
          width={70}
          height={70}
        />
      </div>
      <div className="border row-start-2 col-start-2 col-span-5 p-2">
        <span className="text-sm">{data.description}</span>
      </div>
    </div>
  );
};

export default WeatherBlock;
