import { TEvent } from "@/lib/type";
import Image from "next/image";
import Link from "next/link";

type EventListProps = {
  events: TEvent[];
};

type CardProps = {
  event: TEvent;
};

export default function EventList({ events }: EventListProps) {
  return (
    <section
      className="flex gap-8 flex-wrap
     justify-center max-w-[1100px]
     "
    >
      {events.map((event: TEvent) => (
        <Card key={event.id} event={event} />
      ))}
    </section>
  );
}

function Card({ event }: CardProps) {
  const {
    location,
    organizerName,
    slug,
    date,
    description,
    id,
    city,
    name,
    imageUrl,
  } = event;

  const getDateMonth = (date: Date) => {
    const extractDate = new Date(date);
    const day = extractDate.toLocaleString("en-AU", {
      day: "2-digit",
    });
    const month = extractDate
      .toLocaleString("default", {
        month: "short",
      })
      .toUpperCase();

    return { day, month } as const;
  };

  const { day, month } = getDateMonth(date);

  return (
    <Link
      href={`/event/${slug}`}
      className="flex flex-col relative hover:scale-105 overflow-hidden active:scale-[1.02] flex-1 basis-80 max-w-[400px]
     h-[380px]  bg-white/[3%] rounded-xl"
    >
      <Image
        className="h-[60%] object-fit"
        src={imageUrl}
        alt={name}
        width={500}
        height={380}
      />
      <div className="flex flex-col justify-center flex-1 items-center">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="text-white/65 italic text-sm">By {organizerName}</p>
        <p className="text-sm text-white/55 mt-3">{location}</p>
      </div>
      <div className="bg-accent/[3%] text-xl rounded-lg py-1 w-[50px] font-bold absolute top-4 left-4 flex flex-col items-center">
        <p className="text-white/[90%]">{day}</p>
        <p className="text-accent text-xs -mt-[5px]">{month}</p>
      </div>
    </Link>
  );
}
