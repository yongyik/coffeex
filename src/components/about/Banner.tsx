"use client";

import clsx from "clsx";
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
        priority
        sizes="100vw"
        onLoad={() => setLoaded(true)}
        className="object-cover object-center"
      />

      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          loaded ? "opacity-100 bg-black/40" : "opacity-0"
        }`}
      />
      <div
        className={clsx(
          "absolute inset-0 z-10 flex items-center justify-center px-6 text-amber-50 translate-y-3 opacity-0",
          {
            "translate-y-0 opacity-100": loaded,
          },
        )}
      >
        <h1 className="text-center text-3xl font-bold tracking-wide drop-shadow-lg lg:text-5xl">
          {title}
        </h1>
      </div>
    </header>
  );
}
