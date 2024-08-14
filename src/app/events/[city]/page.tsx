import Heading from "@/components/Heading";
import HeroContainer from "@/components/HeroContainer";
import { TEvent } from "../../../lib/type";
import EventList from "@/components/EventList";
import { Suspense } from "react";
import Loading from "@/app/events/loading";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";

type Props = {
  params: {
    city: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;
  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
}

const EventsPage = async ({ params }: Props) => {
  const { city } = params;

  return (
    <>
      <HeroContainer>
        <Heading className="mb-28">Events in {city}</Heading>
      </HeroContainer>
      <Suspense fallback={<Loading />}>
        <EventList city={capitalize(city)} />
      </Suspense>
    </>
  );
};

export default EventsPage;
