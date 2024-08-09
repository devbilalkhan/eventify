import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-3 pt-36 ">
      <h1 className="text-3xl md:text-6xl font-bold tracking-tight">
        Find events around you
      </h1>
      <p className="text-center mb-12 mt-7 text-xl md:text-2xl opacity-75">
        Browse more than
        <span className="font-bold italic text-accent underline">
          {" "}
          10,000 events{" "}
        </span>
        around you
      </p>
      <form action="" className="w-full sm:w-[580px] px-10 md:px-4 ">
        <input
          className="w-full h-12 md:h-14 rounded-lg bg-white/[7%] px-5 outline-none hover:bg-white/[10%] focus:bg-white/[10%] focus:ring-2 ring-accent/50 transition duration-200"
          type="text"
          spellCheck="false"
          placeholder="Search events..."
        />
      </form>
      <section className="mt-10 flex gap-x-6 text-sm text-white/[50%]">
        <p>Popular</p>
        <div className="space-x-2">
          <Link href="/">Sydney</Link>
          <Link href="/">Brisbane</Link>
        </div>
      </section>
    </main>
  );
}
