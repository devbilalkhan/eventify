import Heading from "@/components/Heading";
import HeroContainer from "@/components/HeroContainer";

import { Suspense } from "react";
import Loading from "@/app/events/loading";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";
import EventsList from "@/components/EventLists";

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
        <Heading className="">{capitalize(city)} Events</Heading>
      </HeroContainer>
      {/* <Suspense fallback={<Loading />}> */}
      <EventsList city={city} />
      {/* </Suspense> */}
    </>
  );
};

export default EventsPage;
