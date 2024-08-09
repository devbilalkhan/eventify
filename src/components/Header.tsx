import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex justify-between items-center border-b border-white/20 h-14 px-6">
      <Logo />
      <nav>
        <ul className="flex gap-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/events/all">All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
