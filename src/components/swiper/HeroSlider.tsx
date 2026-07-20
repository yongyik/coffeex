"use client";

import { useEffect, useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Keyboard, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { getLocalizedPath } from "@/i18n/config";
import type { Dictionary, Locale } from "@/i18n/types";
import SwiperCard from "./SwiperCard";

import "swiper/css";
import "swiper/css/pagination";

interface Item {
  id: string;
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface Props {
  locale: Locale;
  items: Item[];
  dictionary: Dictionary["home"]["carousel"];
  priceLabel: string;
}

export default function HeroSlider({ locale, items, dictionary, priceLabel }: Props) {
  const [ready, setReady] = useState(false);
  const [paused, setPaused] = useState(false);
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    function applyMotionPreference() {
      if (mediaQuery.matches) {
        setPaused(true);
      }
    }

    applyMotionPreference();
    mediaQuery.addEventListener("change", applyMotionPreference);
    return () => mediaQuery.removeEventListener("change", applyMotionPreference);
  }, []);

  useEffect(() => {
    if (!swiper?.autoplay) return;

    if (paused) {
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.start();
    }
  }, [paused, swiper]);

  if (items.length === 0) return null;

  return (
    <section
      aria-label={dictionary.label}
      aria-roledescription="carousel"
      className="mx-auto min-h-70 w-full max-w-7xl px-5"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 24 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full"
      >
        <div className="mb-2 flex justify-end">
          <button
            type="button"
            onClick={() => setPaused((current) => !current)}
            aria-label={paused ? dictionary.resume : dictionary.pause}
            title={paused ? dictionary.resume : dictionary.pause}
            className="inline-flex size-11 items-center justify-center rounded-full border border-amber-50/40 bg-black/20 text-sm font-bold text-amber-50 transition hover:bg-amber-50/15 hover:text-amber-100"
          >
            <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span>
          </button>
        </div>

        <Swiper
          modules={[Pagination, Autoplay, Keyboard, A11y]}
          onSwiper={setSwiper}
          onAfterInit={() => setReady(true)}
          loop={items.length > 2}
          speed={900}
          autoplay={
            paused
              ? false
              : { delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }
          }
          keyboard={{ enabled: true, onlyInViewport: true }}
          a11y={{
            enabled: true,
            containerMessage: dictionary.label,
            slideLabelMessage: dictionary.slideLabel,
            paginationBulletMessage: dictionary.paginationBullet,
          }}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1}
          watchSlidesProgress
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 24 },
          }}
          className="pb-10"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} aria-label={item.name}>
              <SwiperCard
                href={`${getLocalizedPath(locale, "/menu")}#${item.id}`}
                linkLabel={`${dictionary.viewItem}：${item.name}`}
                src={item.photo}
                alt={item.name}
                name={item.name}
                description={item.description}
                price={item.price}
                priceLabel={priceLabel}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
