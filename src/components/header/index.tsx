import { LinkType } from "@/lib/types";
import HeaderCtaLink from "@/ui/links/header-cta-link";
import Image from "next/image";
import Link from "next/link";
import BarsIcon from "./bars-icon";
import MobileNav from "./mobile-nav";
import Navigation from "./navigation";

interface ElementType {
  navbar: LinkType[];
  ctaLink: LinkType[];
}

const Header: React.FC<ElementType> = (props) => {
  const { navbar, ctaLink } = props;

  return (
    <header className=" bg-gray w-full h-[10vh] sticky top-0 z-10 text-darkGray">
      <div className="max-w-screen-2xl mx-auto h-full flex px-2 lg:px-10 items-center gap-4 justify-between py-2">
        <Link href="/" className="flex-shrink-0 lg:mr-4 px-2 lg:px-10">
          <Image
            className="h-10 w-11"
            src={"/tent.png"}
            width={100}
            height={100}
            alt="logo-tent"
          />
        </Link>
        <Navigation navbar={navbar} />
        <MobileNav navbar={navbar} />
        <div className="button-section flex gap-4 sm:justify-center items-center">
          {ctaLink?.map((link) => (
            <HeaderCtaLink key={link.id} data={link} />
          ))}
        </div>
        <BarsIcon />
      </div>
    </header>
  );
};

export default Header;
