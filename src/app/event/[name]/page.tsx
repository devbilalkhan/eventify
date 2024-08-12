import Heading from "@/components/Heading";
import { TEvent } from "@/lib/type";
import Image from "next/image";

type EventPageProps = {
  params: {
    name: string;
  };
};

export default async function EventPage({ params }: EventPageProps) {
  const eventName = params.name;
  // const response = await fetch(``);
  // const data = await response.json();
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${eventName}`
  );
  const data: TEvent = await response.json();

  const {
    name,
    slug,
    city,
    location,
    date,
    organizerName,
    imageUrl,
    description,
  } = data;

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await sleep(2000);

  return (
    <main>
      <section className="relative py-16 overflow-hidden flex justify-center items-center">
        <Image
          className="object-cover blur-3xl z-0"
          src={imageUrl}
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          quality={50}
          alt={name}
          priority
        />
        <div className="z-1 relative flex flex-col lg:flex-row gap-6 lg:gap-16 ">
          <Image
            src={imageUrl}
            alt={name}
            width={300}
            height={200}
            className="rounded-xl border-2 border-white/50 object-cover"
          />
          <div className="flex flex-col">
            <p className="text-white/[80%]">
              {new Date(date).toLocaleDateString("en-US", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}
            </p>

            <Heading className="mb-2 mt-1 whitespace-nowrap">{name}</Heading>
            <p className="text-md text-white/[80%] italic whitespace-nowrap mb-4">
              Organized by {organizerName}
            </p>
            <button
              className="bg-white/20 text-lg capitalize lg:mt-auto w-[95vw] sm:w-full rounded-md
             border-white/10 border-2 py-2 bg-blur state-effects"
            >
              Get tickets
            </button>
          </div>
        </div>
      </section>
      <div className="text-center min-h-[75vh] space-y-12 my-12">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{description}</SectionContent>
        </Section>

        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg mb-8">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-4xl text-lg leading-8 mx-auto text-white/75">
      {children}
    </p>
  );
}
