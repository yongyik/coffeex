"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
  aspect: string;
  featured?: boolean;
};

interface Props {
  id: string;
  title: string;
  images: GalleryImage[];
}

export default function ImageGallery({ id, title, images }: Props) {
  return (
    <section id={id} className="relative z-10 scroll-mt-32 py-14">
      <h2 className="pb-8 text-4xl font-bold lg:text-center lg:text-6xl">
        {title}
      </h2>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <motion.div
            key={image.src}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={image.featured ? "md:col-span-2 lg:col-span-2" : undefined}
          >
            <figure className={`${image.aspect} relative overflow-hidden rounded-2xl border border-amber-50/40 shadow-lg`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={image.featured
                  ? "(max-width: 767px) 100vw, (max-width: 1279px) 100vw, 66vw"
                  : "(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"}
                className="object-cover"
              />
            </figure>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
