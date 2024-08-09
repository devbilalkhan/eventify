"use client";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";
const routes = [
  {
    id: "01",
    name: "Home",
    path: "/",
  },
  {
    id: "02",
    name: "All Events",
    path: "/events/all",
  },
];

export default function Header() {
  const activePathname = usePathname();
  return (
    <header className=" flex justify-between items-center border-b border-white/20 h-14 px-6">
      <Logo />

      <nav className="h-full ">
        <ul className=" flex gap-x-8 h-full text-sm">
          {routes.map((route) => (
            <li
              key={route.id}
              className={clsx(" hover:text-white transition relative flex items-center", {
                "text-white": activePathname === route.path,
                "text-white/50": activePathname !== route.path,
              })}
            >
              <Link href={route.path}>{route.name}</Link>
              {/* Framer motion border */}

              {activePathname === route.path && (
                <motion.div
                  layoutId="header-active-link"
                  className="bg-accent h-1 w-full absolute bottom-0"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
