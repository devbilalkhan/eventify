import React from "react";

export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-3xl lg:text-6xl tracking-tight  font-semibold">
      {children}
    </div>
  );
}
