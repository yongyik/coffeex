"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import SwiperCard from "./SwiperCard";

import "swiper/css";
import "swiper/css/pagination";

interface Item {
  name: string;
  description: string;
  photo: string;
  price: number;
}

type Props = {
  items: Item[];
};

export default function HeroSlider({ items }: Props) {
  const [ready, setReady] = useState(false);

  if (items.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto min-h-70 w-full max-w-7xl px-5">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{
          opacity: ready ? 1 : 0,
          y: ready ? 0 : 24,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="w-full"
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          onAfterInit={() => setReady(true)}
          loop={items.length > 2}
          speed={900}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
          }}
          className="pb-10"
        >
          {items.map((item) => (
            <SwiperSlide key={item.name}>
              <SwiperCard
                src={item.photo}
                alt={item.name}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}