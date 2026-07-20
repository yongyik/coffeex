"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface HeroProps {
  src: string;
  alt: string;
  title: string;
  desc: string;
  menuHref: string;
  menuLabel: string;
  whatsappHref: string;
  whatsappLabel: string;
}

export default function Hero({
  src,
  alt,
  title,
  desc,
  menuHref,
  menuLabel,
  whatsappHref,
  whatsappLabel,
}: HeroProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <header className="relative h-80 w-full overflow-hidden bg-stone-900 lg:h-176">
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

      <div className="absolute inset-x-4 top-16 flex max-w-3xl flex-col gap-2 text-amber-50 sm:left-7 sm:right-auto lg:left-24 lg:top-24">
        <h1 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl lg:text-6xl">{title}</h1>

        <p className="max-w-2xl text-sm leading-6 sm:text-base lg:py-4 lg:text-2xl lg:leading-9">
          {desc}
        </p>

        <div className="mt-3 flex flex-wrap gap-3 lg:mt-0">
          <Link
            href={menuHref}
            className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-amber-100 px-5 py-2.5 text-sm font-semibold text-stone-950 transition hover:bg-white sm:flex-none"
          >
            {menuLabel}
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full border border-amber-50/70 bg-black/20 px-5 py-2.5 text-sm font-semibold transition hover:bg-amber-50/15 hover:text-amber-100 sm:flex-none"
          >
            {whatsappLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
