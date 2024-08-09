import Heading from "@/components/Heading";
import HeroContainer from "@/components/HeroContainer";

const EventsPage = ({ params }: { params: { city: string } }) => {
  return (
    <>
      <HeroContainer>
        <Heading>{params.city}</Heading>
      </HeroContainer>
    </>
  );
};

export default EventsPage;
