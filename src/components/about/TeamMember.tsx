"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  id: string;
  title: string;
  favoriteLabel: string;
  members: {
    src: string;
    alt: string;
    name: string;
    role: string;
    desc: string;
    favorite: string;
    aspect: string;
  }[];
}

export default function TeamMember({ id, title, favoriteLabel, members }: Props) {
  return (
    <section id={id} className="scroll-mt-32 py-14">
      <h2 className="text-4xl font-bold lg:text-center lg:text-6xl">{title}</h2>
      <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {members.map((m) => (
          <motion.li 
            initial={{  opacity: 0 }}
            whileInView={{  opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            key={m.name}
            className="flex h-full flex-col overflow-hidden rounded-2xl border border-amber-50/20 bg-black/20 shadow-lg"
          >
            <figure className={`${m.aspect} relative w-full overflow-hidden`}>
              <Image
                src={m.src}
                alt={m.alt}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                className="object-cover"
              />
            </figure>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-3xl font-semibold">{m.name}</h3>
              <p className="mt-1 text-sm text-amber-200">{m.role}</p>
              <p className="mt-4 flex-1 leading-7 text-amber-50/85">{m.desc}</p>
              <p className="mt-5 border-t border-amber-50/15 pt-4 text-sm text-amber-100">
                <span className="font-semibold">{favoriteLabel}：</span>{m.favorite}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
