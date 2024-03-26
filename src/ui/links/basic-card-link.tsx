import Link from "next/link";
import { LinkProps } from "@/lib/types";

const BasicCardLink = ({ link }: { link: LinkProps }) => {
  const { title, href, isExternal } = link;

  return (
    <Link target={isExternal ? "_blank" : "_self"} href={`/${href}`}>
      <div className="hover:bg-blue w-fit rounded-md hover:text-white border text-blue px-4 py-2">
        {title}
      </div>
    </Link>
  );
};

export default BasicCardLink;
