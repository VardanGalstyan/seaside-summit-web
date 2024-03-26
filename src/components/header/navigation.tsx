"use client";

import { LinkProps } from "@/lib/types";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

const Navigation = ({ navbar }: { navbar: LinkProps[] }) => {
  const pathname = usePathname();

  return (
    <nav className="lg:flex flex-grow hidden">
      <ul className="nav-items flex space-x-4 gap-5">
        {navbar.map((item) => {
          const selectedPath = pathname.substring(1) === item.href;
          return (
            <li
              key={`${item.title}-${item.id}`}
              className={clsx(
                "hover:text-dark font-semibold text-md tracking-wide transition-colors duration-400",
                selectedPath ? "text-darkBlue" : ""
              )}
            >
              <Link href={`/${item.href}`}>{item.title.toUpperCase()}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
