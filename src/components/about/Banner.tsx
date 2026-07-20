"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  title: string;
  src: string;
  alt: string;
}

export default function Banner({ title, src, alt }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <header className="relative h-60 w-full overflow-hidden bg-stone-900 lg:h-106">
      <Image
        src={src}
        alt={alt}
        fill
        preload
        sizes="100vw"
        onLoad={() => setLoaded(true)}
        className={`object-cover object-center transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-amber-50">
        <h1 className="text-center text-3xl font-bold tracking-wide drop-shadow-lg lg:text-5xl">
          {title}
        </h1>
      </div>
    </header>
  );
}
