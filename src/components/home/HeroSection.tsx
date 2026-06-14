"use client";

import Image from "next/image";
import { useState } from "react";

interface HeroProps {
  src: string;
  alt: string;
  title: string;
  desc: string;
}

export default function Hero({ src, alt, title, desc }: HeroProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <header className="relative h-70 w-full overflow-hidden bg-stone-900 lg:h-176">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        onLoad={() => setLoaded(true)}
        className={`object-cover object-center transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          loaded
            ? "opacity-100 bg-black/40"
            : "opacity-0"
        }`}
      />

      <div
        className={`absolute top-14 left-7 flex flex-col gap-1.5 text-amber-50 transition-all duration-700 lg:left-27 lg:top-24 ${
          loaded
            ? "translate-y-0 opacity-100"
            : "translate-y-3 opacity-0"
        }`}
      >
        <h1 className="text-2xl font-bold lg:text-6xl">{title}</h1>

        <p className="h-auto text-sm lg:w-169 lg:py-5 lg:text-2xl">
          {desc}
        </p>
      </div>
    </header>
  );
}