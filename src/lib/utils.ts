import {  TEvent } from "@prisma/client";
import clsx, { ClassValue } from "clsx";
import { twMerge } from 'tailwind-merge';
import prisma from "./db";



export function cn(...classes: ClassValue[]){
  return twMerge(clsx(classes))
}

export function capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

export async function getEvents(city: string): Promise<TEvent[]> {  
  const events = await prisma.tEvent.findMany({
    where: {
      city: city === "all"? {} : city,
    },
    orderBy: {
      date: "asc",
    },
  })  
  return events
}

export async function getEvent(name: string): Promise<TEvent | null> {  
  const event = await prisma.tEvent.findUnique({
    where: {
      slug: name,
    },
  })
  console.log("utls", event)
  return event
}