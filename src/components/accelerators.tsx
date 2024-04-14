import { BlockType, HeaderProps, ImageType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

interface AcceleratorType {
  id: number;
  name: string;
  href: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  logo: ImageType;
}

export interface AcceleratorPropType extends BlockType {
  accelerators: AcceleratorType[];
  header: HeaderProps;
}

const Accelerators = ({ data }: { data: AcceleratorPropType }) => {
  const {
    header: { title, paragraph },
    accelerators,
  } = data;

  return (
    <section className="p-5">
      <div className="max-w-screen-2xl p-2 py-10 lg:p-10 lg:flex-row  mx-auto gap-10 flex flex-col justify-between items-center">
        <div className="flex flex-grow text-center flex-col gap-2">
          <div className="text-2xl lg:text-4xl font-bold">{title}</div>
          <div className="text-md lg:text-lg">{paragraph}</div>
        </div>
        <div className="flex gap-5  lg:max-w-[60%] flex-wrap justify-evenly">
          {accelerators?.map((item) => {
            return (
              <Link
                target="_blank"
                href={item.href ?? "#"}
                key={`${item.id}-${item.name}`}
                className="relative aspect-video h-16 lg:h-20"
              >
                <Image
                  className="object-contain p-1 h-full w-full"
                  src={item.logo.url}
                  width={200}
                  height={200}
                  alt={`logo-${item.name}`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Accelerators;
