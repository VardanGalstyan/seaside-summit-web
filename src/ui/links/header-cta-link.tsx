import { LinkType } from "@/lib/types";
import clsx from "clsx";
import Link from "next/link";

const HeaderCtaLink = ({ data }: { data: LinkType }) => {
  const { title, href = "#", isExternal } = data;

  return (
    <Link
      target={isExternal ? "blank" : "_self"}
      href={`/${href}`}
      className={clsx(
        "px-10 py-2 bg-blue-500 font-normal rounded-md",
        "bg-darkBlue hover:bg-blue text-white  transition-colors duration-500"
      )}
    >
      {title}
    </Link>
  );
};

export default HeaderCtaLink;
