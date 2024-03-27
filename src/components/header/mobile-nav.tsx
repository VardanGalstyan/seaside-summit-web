"use client";

import clsx from "clsx";
import Link from "next/link";

import { useAtomValue } from "jotai";
import { navbarAtom } from "./state";
import { LinkProps } from "@/lib/types";
import { usePathname } from "next/navigation";

const MobileNav = ({ navbar }: { navbar: LinkProps[] }) => {
  const isOpen = useAtomValue(navbarAtom);
  const pathname = usePathname();

  return (
    <nav
      className={clsx(
        `absolute lg:hidden shadow-md  bg-gray z-20 left-0 right-0 top-[10vh]`,
        "transition-all duration-600 ease-in-out",
        isOpen ? "opacity-100" : "opacity-0 hidden"
      )}
    >
      <ul className="flex flex-col w-full">
        {navbar?.map((item) => {
          const selectedPath = pathname.substring(1) === item.href;
          return (
            <Link
              key={`${item.title}-${item.id}`}
              className="w-full h-full"
              href={`/${item.href}`}
            >
              <li
                className={clsx(
                  "hover:text-darkGray h-full w-full hover:bg-white cursor-pointer font-semibold text-md tracking-wide p-3",
                  selectedPath ? "text-darkBlue" : ""
                )}
              >
                {item.title.toUpperCase()}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileNav;
