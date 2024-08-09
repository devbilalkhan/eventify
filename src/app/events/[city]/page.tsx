const EventsPage = ({ params }: { params: { city: string } }) => {
  return <div>{params.city}</div>;
};

export default EventsPage;
