import { getEvents } from "@/lib/utils";
import EventCard from "./EventCard";
import { TEvent } from "@prisma/client";
import PaginationContols from "./PaginationContols";

type EventsListProps = {
  city: string;
  page?: number;
};

export default async function EventsList({ city, page = 1 }: EventsListProps) {
  const { events, totalEvents } = await getEvents(city, page);

  const prevPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalEvents > 6 * page ? `/events/${city}?page=${page + 1}` : "";

  console.log(">>", nextPath, totalEvents);
  return (
    <section
      className="flex gap-8 flex-wrap
     justify-center mx-auto max-w-[1100px]
     "
    >
      {events.map((event: TEvent) => (
        <EventCard key={event.id} event={event} />
      ))}

      <PaginationContols prevPath={prevPath} nextPath={nextPath} />
    </section>
  );
}
