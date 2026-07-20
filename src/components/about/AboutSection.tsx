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
  reverse?: boolean;
  imageAspect?: string;
};

export default function AboutSection({
  id,
  title,
  subtitle,
  paragraphs = [],
  image,
  reverse = false,
  imageAspect = "aspect-[4/5]",
}: Props) {
  return (
    <motion.section
      id={id}
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative z-10 grid scroll-mt-32 items-center gap-8 py-10 text-amber-100 lg:grid-cols-2 lg:gap-12 lg:py-16"
    >
      <div className={reverse ? "lg:order-2" : undefined}>
        {title ? (
          <h2 className="text-4xl font-bold lg:text-6xl">{title}</h2>
        ) : null}

        {subtitle ? (
          <h3 className="mt-3 text-2xl font-semibold lg:text-3xl">{subtitle}</h3>
        ) : null}

        <div className="mt-5 max-w-xl space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="leading-8 lg:text-lg lg:leading-9">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {image ? (
        <div
          className={`${imageAspect} relative w-full overflow-hidden rounded-2xl border border-amber-50/20 shadow-lg ${
            reverse ? "lg:order-1" : ""
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ) : null}
    </motion.section>
  );
}
