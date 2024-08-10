import Heading from "@/components/Heading";
import HeroContainer from "@/components/HeroContainer";
import { TEvent } from "../../../lib/type";

type EventPageProps = {
  params: {
    city: string;
  };
};

const EventsPage = async ({ params }: EventPageProps) => {
  const { city } = params;
  function capitalizeFirstWordAndCity(text: string, city: string): string {
    const words = text.split(" ");
    if (words.length > 0) {
      words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    }
    const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);
    return `${words.join(" ")} in ${capitalizedCity}`;
  }

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const data: TEvent[] = await response.json();

  return (
    <>
      <HeroContainer>
        <Heading>{capitalizeFirstWordAndCity("events", city)}</Heading>
        {data.map((event: TEvent) => (
          <span key={event.id}>{event.name}</span>
        ))}
      </HeroContainer>
    </>
  );
};

export default EventsPage;
