
import { getEvents } from "@/lib/utils";

import EventCard from "./EventCard";
import { TEvent } from "@prisma/client";

type EventsListProps = {
  city: string;
};

export default async function EventsList({ city }: EventsListProps) {
  const events = await getEvents(city);
  return (
    <section
      className="flex gap-8 flex-wrap
     justify-center mx-auto max-w-[1100px]
     "
    >
      {events.map((event: TEvent) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
