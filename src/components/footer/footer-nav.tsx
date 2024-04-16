"use client";

import { LinkPropsType } from "@/lib/types";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FooterNavigation = ({ navLinks }: { navLinks: LinkPropsType[] }) => {
  const pathname = usePathname();

  return (
    <nav className="lg:flex mt-3 flex-grow justify-center items-center">
      <ul className="nav-items flex space-x-4 gap-1 text-xs lg:text-sm justify-center">
        {navLinks?.map((item) => {
          const selectedPath = pathname.substring(1) === item.href;
          return (
            <Link
              key={`${item.title}-${item.id}`}
              href={`/${item.href ?? "#"}`}
            >
              <li
                className={clsx(
                  "hover:text-white uppercase cursor-pointer relative font-semibold tracking-wide transition-colors duration-400",
                  "before:block hover:before:absolute before:from-white before:opacity-5 before:bg-gradient-radial before:-inset-10 before:rounded-full",
                  selectedPath ? "text-white" : ""
                )}
              >
                {item.title}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default FooterNavigation;
