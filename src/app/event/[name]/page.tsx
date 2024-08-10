import { TEvent } from "@/lib/type";
import Image from "next/image";

type EventPageProps = {
  params: {
    name: string;
  };
};

export default async function EventPage({ params }: EventPageProps) {
  const eventName = params.name;
  // const response = await fetch(``);
  // const data = await response.json();
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${eventName}`
  );
  const data: TEvent = await response.json();

  const {
    name,
    slug,
    city,
    location,
    date,
    organizerName,
    imageUrl,
    description,
  } = data;

  return (
    <main>
      <section className="relative h-[361px] overflow-hidden">
        <Image
          className="object-cover blur-3xl "
          src={imageUrl}
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          quality={50}
          alt={name}
        />
      </section>
    </main>
  );
}
