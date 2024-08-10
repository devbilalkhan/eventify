import { cn } from "@/lib/utils";
import React from "react";

export default function Heading({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div
      className={cn(
        "text-3xl lg:text-6xl tracking-tight  font-semibold",
        className
      )}
    >
      {children}
    </div>
  );
}
