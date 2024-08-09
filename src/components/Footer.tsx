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
     md:first-letter:h-14 flex flex-col md:flex-row justify-between px-6 
      items-center text-white/[30%] "
    >
      <small className="text-xs">
        &copy; 2050 Copyright Mainframe Studio. All rights reserved.{" "}
      </small>
      <section className="py-4">
        <ul className="flex flex-col md:flex-row gap-4 text-sm items-center ">
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
