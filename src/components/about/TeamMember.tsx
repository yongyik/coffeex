"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  id: string;
  title: string;
  members: { src: string; alt: string; name: string; desc: string }[];
}

export default function TeamMember({ id, title, members }: Props) {
  return (
    <section id={id} className="p-7">
      <h2 className="text-4xl">{title}</h2>
      <ul>
        {members.map((m) => (
          <motion.li 
            initial={{  opacity: 0 }}
            whileInView={{  opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            id={id}
            key={m.name}
            className="py-7 flex flex-col gap-2.5"
          >
            <Image
              src={m.src}
              alt={m.alt}
              width={333}
              height={333}
              className="w-full max-w-88"
            />
            <h3 className="text-3xl">{m.name}</h3>
            <p className="max-w-122">{m.desc}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
