import clsx, { ClassValue } from "clsx";
import { twMerge } from 'tailwind-merge';
import { TEvent } from "./type";

export function cn(...classes: ClassValue[]){
  return twMerge(clsx(classes))
}



export function capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }


export async function getEvents(city: string): Promise<TEvent[]> {

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: TEvent[] = await response.json();
  return events
}


export async function getEvent(name: string): Promise<TEvent> {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${name}`
  );
  const event: TEvent = await response.json();
  return event
}