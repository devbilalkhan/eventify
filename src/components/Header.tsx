import Link from "next/link";
import Logo from "./Logo";

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
  return (
    <header className="flex justify-between items-center border-b border-white/20 h-14 px-6">
      <Logo />
      <nav>
        <ul className="flex gap-x-8">
          {routes.map((route) => (
            <li key={route.id} className="text-white/50 hover:text-white transition">
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
