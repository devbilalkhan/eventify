import { TEvent } from "@prisma/client";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export async function getEvents(
  city: string,
  page = 1
): Promise<{ events: TEvent[]; totalEvents: number }> {
  const events = await prisma.tEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
    take: 6, // pagination
    skip: (page - 1) * 6, // next pages for pagination
  });

  let totalEvents;
  if (city === "all") {
    totalEvents = await prisma.tEvent.count();
  } else {
    totalEvents = await prisma.tEvent.count({
      where: {
        city: city,
      },
    });
  }
  console.log(events, totalEvents)
  return { events, totalEvents };
}

export async function getEvent(name: string): Promise<TEvent | null> {
  
  const event = await prisma.tEvent.findUnique({
    where: {
      slug: name,
    },
  });
  console.log("utls", event);
  return event;
}
