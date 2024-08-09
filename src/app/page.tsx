import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-3 pt-36 ">
      <h1 className="text-3xl md:text-6xl font-bold tracking-tight">
        Find events around you
      </h1>
      <p className="mb-12 mt-7 text-2xl md:text-3xl opacity-75">
        Browse more than
        <span className="font-bold italic text-[#a4f839] underline">
          {" "}
          10,000 events{" "}
        </span>
        around you
      </p>
      <form action="" className="w-full sm:w-[580px]">
        <input
          className="w-full h-16 rounded-lg bg-white/[7%] px-5 outline-none hover:bg-white/[10%] focus:bg-white/[10%] focus:ring-2 ring-[#a4f839]/50 transition duration-200"
          type="text"
          spellCheck="false"
          placeholder="Search events..."
        />
      </form>
      <section className="mt-10 flex gap-x-6 text-sm">
        <p>Popular</p>
        <div className="space-x-2">
          <Link href="/">Sydney</Link>
          <Link href="/">Bribane</Link>
        </div>
      </section>
    </main>
  );
}
