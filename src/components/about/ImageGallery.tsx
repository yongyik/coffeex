"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
};

interface Props {
  id: string;
  title: string;
  images: GalleryImage[];
}

export default function ImageGallery({ id, title, images }: Props) {
  return (
    <section id={id} className="relative z-10 scroll-mt-24 py-12">
      <h2 className="px-7 pb-8 text-4xl font-bold lg:text-center lg:text-7xl">
        {title}
      </h2>

      <div className="space-y-8">
        {images.map((image, index) => (
          <motion.div
            key={image.src}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`flex px-7 ${
              index % 2 === 1 ? "justify-end" : "justify-start"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={396}
              height={396}
              sizes="(max-width: 1024px) 224px, 396px"
              className="h-auto w-56 rounded-2xl border-2 border-amber-50 object-cover shadow-lg lg:w-99"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}