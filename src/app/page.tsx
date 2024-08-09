import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Find events around you</h1>
      <p>Browse more than 10,000 events around you</p>
      <form action="">
        <input type="text" spellCheck="false" placeholder="Search events..." />
      </form>
      <section>
        <p>Popular</p>
        <div>
          <Link href="/">Sydney</Link>
          <Link href="/">Bribane</Link>
        </div>
      </section>
    </main>
  );
}
