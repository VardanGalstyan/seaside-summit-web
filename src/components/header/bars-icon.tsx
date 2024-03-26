"use client";

import clsx from "clsx";
import { useAtom } from "jotai";
import { navbarAtom } from "./state";

const BarsIcon = () => {
  const [isOpen, setIsOpen] = useAtom<boolean>(navbarAtom);
  const genericHamburgerLine = `h-[2px] w-6 my-1 bg-dark transition-all duration-300`;

  return (
    <button
      className="flex flex-col h-12 w-12 lg:hidden rounded justify-center items-center group"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={clsx(
          genericHamburgerLine,
          isOpen
            ? "rotate-45 translate-y-2 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        )}
      />
      <div
        className={clsx(
          genericHamburgerLine,
          isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        )}
      />
      <div
        className={clsx(
          genericHamburgerLine,
          isOpen
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        )}
      />
    </button>
  );
};

export default BarsIcon;
