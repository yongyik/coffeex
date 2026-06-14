"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  href: string;
  src: string;
  alt: string;
  text: string;
}

export default function ImageLinkSection({ href, src, alt, text }: Props) {
  return (
    <motion.div
      className="relative"
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Link
        href={href}
        className="group relative block w-full overflow-hidden"
        aria-label={text}
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={600}
          sizes="100vw"
          className="h-56 w-full object-cover transition duration-700 group-hover:scale-105 lg:h-96"
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