"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  id?: string;
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
  image?: {
    src: string;
    alt: string;
  };
};

export default function AboutSection({
  id,
  title,
  subtitle,
  paragraphs = [],
  image,
}: Props) {
  return (
    <motion.section
      id={id}
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative z-10 flex scroll-mt-24 flex-col items-center px-6 py-12 text-amber-100 lg:py-20"
    >
      {title ? (
        <h2 className="py-5 text-center text-4xl font-bold lg:text-6xl">
          {title}
        </h2>
      ) : null}

      {subtitle ? (
        <h3 className="py-2 text-center text-2xl font-semibold lg:text-4xl">
          {subtitle}
        </h3>
      ) : null}

      <div className="max-w-198 space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="leading-8 lg:text-xl lg:leading-9">
            {paragraph}
          </p>
        ))}
      </div>

      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          width={333}
          height={333}
          className="mt-8 h-auto w-full max-w-88 rounded-2xl object-cover shadow-lg"
        />
      ) : null}
    </motion.section>
  );
}
