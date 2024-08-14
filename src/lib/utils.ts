import clsx, { ClassValue } from "clsx";
import { twMerge } from 'tailwind-merge';

export function cn(...classes: ClassValue[]){
  return twMerge(clsx(classes))
}



export function capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }