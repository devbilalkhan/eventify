import Heading from "@/components/Heading";
import HeroContainer from "@/components/HeroContainer";

import { Suspense } from "react";
import Loading from "@/app/events/loading";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";
import EventsList from "@/components/EventLists";
import { useSearchParams } from "next/navigation";
import { z } from "zod";

type MetaProps = {
  params: {
    city: string;
  };
};

type EventsPageProps = MetaProps & {
  searchParams: {
    [key: string]: string | string[] | undefined; // from next js documentation
  };
};

export function generateMetadata({ params }: MetaProps): Metadata {
  const city = params.city;

  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional()

const EventsPage = async ({ params, searchParams }: EventsPageProps) => {
  const { city } = params;
  const parsedPaged = pageNumberSchema.safeParse(searchParams.page)
  if (!parsedPaged.success) {
    throw new Error("Something went wrong!");    
  } 

  return (
    <>
      <HeroContainer>
        <Heading className="">{capitalize(city)} Events</Heading>
      </HeroContainer>
      <Suspense  key={city + parsedPaged.data} fallback={<Loading />}>
        <EventsList city={city} page={parsedPaged.data} />
      </Suspense>
    </>
  );
};

export default EventsPage;
