import React, { Children } from "react";

export default function HeroContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="my-20 flex flex-col items-center">
      {children}
    </main>
  );
}
