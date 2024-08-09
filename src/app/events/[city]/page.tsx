import Heading from "@/components/Heading";
import HeroContainer from "@/components/HeroContainer";

type EventPageProps = {
  params: {
    city: string;
  };
};

const EventsPage = ({ params }: EventPageProps) => {
  const { city } = params;
  function capitalizeFirstWordAndCity(text: string, city: string): string {
    const words = text.split(" ");
    if (words.length > 0) {
      words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    }
    const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);
    return `${words.join(" ")} in ${capitalizedCity}`;
  }
  return (
    <>
      <HeroContainer>
        <Heading>{capitalizeFirstWordAndCity("events", city)}</Heading>
      </HeroContainer>
    </>
  );
};

export default EventsPage;
