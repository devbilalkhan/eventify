"use client";
import { TEvent } from "@/lib/type";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
type EventCardProps = {
  event: TEvent;
};

function EventCard({ event }: EventCardProps) {
  const {
    location,
    organizerName,
    slug,
    date,
    description,
    id,
    city,
    name,
    imageUrl,
  } = event;

  const motionLinkRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: motionLinkRef,
    offset: ["0 1", "1.5 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const getDateMonth = (date: Date) => {
    const extractDate = new Date(date);

    const day = extractDate.toLocaleString("en-AU", {
      day: "2-digit",
    });
    const month = extractDate
      .toLocaleString("default", {
        month: "short",
      })
      .toUpperCase();

    return { day, month } as const;
  };

  const { day, month } = getDateMonth(date);
  const MotionLink = motion(Link);
  return (
    <MotionLink
      ref={motionLinkRef}
      href={`/event/${slug}`}
      className="flex flex-col relative hover:scale-105 overflow-hidden active:scale-[1.02] flex-1 basis-80 max-w-[350px]
     h-[380px]  bg-white/[3%] rounded-xl"
      style={{
        // @ts-ignore
        scale: scaleProgress,
        opacaity: scaleProgress,
      }}
      initial={{
        opacity: 0.1,
        scale: 0.8,
      }}
    >
      <Image
        className="h-[60%] object-cover"
        src={imageUrl}
        alt={name}
        width={500}
        height={380}
      />
      <div className="flex flex-col justify-center flex-1 items-center">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="text-white/65 italic text-sm">By {organizerName}</p>
        <p className="text-sm text-white/55 mt-3">{location}</p>
      </div>
      <div className="bg-accent/[3%] text-xl rounded-lg py-1 w-[50px] font-bold absolute top-4 left-4 flex flex-col items-center">
        <p className="text-white/[90%]">{day}</p>
        <p className="text-accent text-xs -mt-[5px]">{month}</p>
      </div>
    </MotionLink>
  );
}

export default EventCard;
