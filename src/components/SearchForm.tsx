"use client";
import { useDebounce } from "@/hooks/searchInput";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import React, { useRef, useState } from "react";
import { z } from "zod";

export default function SearchForm() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const debouncedValue = useDebounce<string>(text);
  const inputRef = useRef<HTMLInputElement>(null);
  const route = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      inputRef.current?.focus();
      return;
    }
    const textInputSchema = z.string().regex(/^[a-zA-z\s]+$/);

    const validatedText = textInputSchema.safeParse(text);
    if (!validatedText.success) {
      setError("Only characters and spaces are allowed.");
    } else {
      route.replace(`events/${text}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
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
      {error !== "" && <span className="text-xs text-red-600">{error}</span>}
    </form>
  );
}
