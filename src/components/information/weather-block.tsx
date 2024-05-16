import Image from "next/image";
import { WeatherType } from "@/lib/types";

const WeatherBlock = ({ data }: { data: WeatherType }) => {
  return (
    <div className="max-w-[70%] mx-auto flex">
      <div className="flex flex-grow min-w-20 justify-center items-center">
        <Image
          src="/wtr0.png"
          className="p-2"
          alt="weather-celsius-sign"
          width={100}
          height={100}
        />
      </div>
      <div className="flex-0">
        <div className="flex">
          <div className="flex justify-center items-center">
            <Image
              src="/wtr1.png"
              className="p-2"
              alt="weather-celsius-sign"
              width={70}
              height={70}
            />
          </div>
          <div className="flex justify-center items-center text-4xl">
            {data.day >= 0 ? "+" + data.day : data.day}
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/wtr2.png"
              className="p-2"
              alt="weather-celsius-sign"
              width={70}
              height={70}
            />
          </div>
          <div className="flex justify-center items-center text-4xl">
            {data.night >= 0 ? "+" + data.night : data.night}
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/wtr3.png"
              className="p-2"
              alt="weather-celsius-sign"
              width={70}
              height={70}
            />
          </div>
        </div>
        <div className="p-2">
          <span className="text-sm">{data.description}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherBlock;
