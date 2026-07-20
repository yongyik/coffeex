"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Keyboard, Pagination } from "swiper/modules";
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
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  if (items.length === 0) {
    return null;
  }

  return (
    <section
      aria-label="推荐饮品轮播"
      aria-roledescription="carousel"
      className="mx-auto min-h-70 w-full max-w-7xl px-5"
    >
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
          modules={[Pagination, Autoplay, Keyboard, A11y]}
          onAfterInit={() => setReady(true)}
          loop={items.length > 2}
          speed={900}
          autoplay={
            reduceMotion
              ? false
              : {
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
          }
          keyboard={{ enabled: true, onlyInViewport: true }}
          a11y={{
            enabled: true,
            containerMessage: "推荐饮品轮播",
            slideLabelMessage: "第 {{index}} 张，共 {{slidesLength}} 张",
            paginationBulletMessage: "前往第 {{index}} 张推荐饮品",
          }}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1}
          watchSlidesProgress
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
          }}
          className="pb-10"
        >
          {items.map((item) => (
            <SwiperSlide key={item.name} aria-label={item.name}>
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
