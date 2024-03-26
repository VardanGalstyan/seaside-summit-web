import { LinkProps } from "@/lib/types";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { SocialIcons } from "../social-icon-extractor";
import FooterNavigation from "./footer-nav";

interface FooterProps {
  addressLinks: LinkProps[];
  socialLinks: LinkProps[];
  navLinks: LinkProps[];
}

const Footer = ({ data }: { data: FooterProps }) => {
  const { addressLinks, navLinks, socialLinks } = data;
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{ backgroundImage: `url(/footer-bg.png)` }}
      className="text-darkGray bg-right-top"
    >
      <div className="max-w-screen-2xl mx-auto py-10 px-2 lg:px-10 flex items-baseline flex-wrap md:items-top gap-4 justify-center">
        <div className="flex-shrink-0 self-start lg:mr-4 px-2 lg:px-10">
          <Link href="/">
            <Image
              className="h-15 lg:h-20 w-full"
              src={"/logo-light.png"}
              width={100}
              height={100}
              alt="logo-light"
            />
          </Link>
        </div>
        <FooterNavigation navLinks={navLinks} />
        <div className="button-section flex gap-4 justify-center sm:justify-center items-center">
          <ul className="flex flex-col  items-center md:items-end space-x-4 gap-2">
            {addressLinks?.map((item) => (
              <li
                key={`${item.title}-${item.id}`}
                className="text-xs font-light transition-colors duration-400"
              >
                <Link
                  target={item.isExternal ? "_blank" : "_self"}
                  href={item.href}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-b-[0.5px] border-white opacity-50 w-full" />
        <div className="flex justify-center lg:justify-between w-full">
          <span className="hidden lg:block text-xs">
            {`© 2016 - ${currentYear}, Seaside Startup Summit`}
          </span>
          <ul className="flex items-center md:items-end space-x-4 gap-2">
            {socialLinks?.map((item) => {
              return (
                <li
                  key={`${item.title}-${item.id}`}
                  className="font-light text-xl transition-colors duration-400"
                >
                  <Link
                    target={item.isExternal ? "blank" : "_self"}
                    href={`${item.href}`}
                  >
                    <SocialIcons title={item.title} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
