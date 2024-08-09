"use client";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

export default function SearchForm() {
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const route = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      inputRef.current?.focus();
      return;
    }
    route.push(`/events/${text}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full sm:w-[580px] px-10 md:px-4 "
    >
      <input
        ref={inputRef}
        className="w-full h-12 md:h-14 rounded-lg bg-white/[7%] px-5 outline-none hover:bg-white/[10%] focus:bg-white/[10%] focus:ring-2 ring-accent/50 transition duration-200"
        value={text}
        spellCheck="false"
        placeholder="Search events..."
        onChange={handleChange}
      />
    </form>
  );
}
