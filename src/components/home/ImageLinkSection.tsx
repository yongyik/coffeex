"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";

interface Props {
  href: string;
  src: string;
  alt: string;
  text: string;
  className?: string;
  imagePosition?: string;
}

export default function ImageLinkSection({
  href,
  src,
  alt,
  text,
  className,
  imagePosition,
}: Props) {
  return (
    <motion.div
      className={clsx("relative min-w-0", className)}
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Link
        href={href}
        className="group relative block h-full min-h-56 w-full overflow-hidden"
        aria-label={text}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1023px) 100vw, 50vw"
          className={clsx(
            "object-cover transition duration-700 group-hover:scale-105",
            imagePosition,
          )}
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition duration-500 group-hover:bg-black/55">
          <div className="text-3xl font-semibold text-amber-50 underline underline-offset-4 drop-shadow-lg transition duration-500 group-hover:-translate-y-1 lg:text-5xl">
            {text}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
