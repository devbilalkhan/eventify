import React, { Children } from "react";

export default function HeroContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mt-20 flex flex-col items-center min-h-[110vh]">
      {children}
    </main>
  );
}
