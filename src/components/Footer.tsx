import Link from "next/link";

const routes = [
  {
    id: "01",
    name: "Terms and Conditions",
    path: "/terms-conditions",
  },
  {
    id: "02",
    name: "Privacy Policy",
    path: "/privacy-policy",
  },
];

export default function Footer() {
  return (
    <footer
      className="mt-auto border-t border-white/[20%]
     h-14 flex justify-between px-6 items-center text-white/[50%] "
    >
      <small>
        &copy; 2050 Copyright Mainframe Studio. All rights reserved.{" "}
      </small>
      <section>
        <ul className="flex text-sm justify-between gap-6">
          {routes.map((route) => (
            <li className="transition hover:text-white/[70%]" key={route.id}>
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </footer>
  );
}
