"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  id: string;
  title: string;
  src: string[];
  alt: string[];
}

export default function ImageGallery({ id, title, src, alt }: Props) {
  return (
    <section id={id}>
      <h2 className="p-7 text-4xl lg:text-center lg:text-7xl">{title}</h2>
      {src.map((src, i) => (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          key={i}
          className={`p-5 px-7 ${i % 2 === 1 ? "flex justify-end" : ""}`}
        >
          <Image
            src={src}
            alt={alt[i]}
            width={224}
            height={224}
            className="border-amber-50 border-2 rounded-2xl h-auto lg:w-99"
          />
        </motion.div>
      ))}
    </section>
  );
}
