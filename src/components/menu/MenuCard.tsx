"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  src: string;
  alt: string;
  name: string;
  description: string;
  fullDescription: string;
  price: number;
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-MY", {
    style: "currency",
    currency: "MYR",
  }).format(price);
}

export default function MenuCard({
  src,
  alt,
  name,
  description,
  fullDescription,
  price,
}: Props) {
  const [showMore, setShowMore] = useState(false);

  function openModal() {
    setShowMore(true);
  }

  function closeModal() {
    setShowMore(false);
  }

  useEffect(() => {
    if (!showMore) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeModal();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showMore]);

  return (
    <>
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-amber-50/30 bg-amber-50/10 shadow-md transition hover:bg-amber-50/15 sm:flex-row">
        <figure className="relative h-96 w-full shrink-0 overflow-hidden bg-black/20 sm:h-60 sm:w-40 lg:h-68 lg:w-44">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 100vw, 176px"
            className="object-cover object-center transition duration-500 hover:scale-105"
          />
        </figure>

        <section className="flex flex-1 flex-col justify-between gap-4 p-4">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-amber-50">{name}</h3>

            <p className="line-clamp-3 text-sm leading-6 text-amber-50/85">
              {description}
            </p>
          </div>

          <div className="flex items-center justify-between gap-3">
            <p className="font-semibold text-amber-100">
              <span className="sr-only">价格：</span>
              {formatPrice(price)}
            </p>

            <button
              type="button"
              onClick={openModal}
              className="text-sm font-medium underline underline-offset-4 transition hover:text-amber-200"
            >
              了解更多
            </button>
          </div>
        </section>
      </article>

      <AnimatePresence>
        {showMore ? (
          <motion.div
            className="fixed inset-0 z-80 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={`menu-${name}`}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl border border-amber-300 bg-[url('/images/bg1.webp')] bg-cover bg-center p-6 text-amber-100 shadow-2xl"
              initial={{ scale: 0.92, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 24 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <button
                type="button"
                onClick={closeModal}
                aria-label="关闭"
                className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full border border-amber-50/30 bg-black/30 text-xl leading-none text-amber-50 transition hover:bg-amber-50 hover:text-stone-950"
              >
                ×
              </button>

              <figure className="relative mx-auto mt-8 h-66 w-48 overflow-hidden rounded-2xl border border-amber-50/20 bg-black/20">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="192px"
                  className="object-cover object-center"
                />
              </figure>

              <section className="mt-6 flex flex-col gap-4">
                <div className="text-center">
                  <h2 id={`menu-${name}`} className="text-4xl font-bold">
                    {name}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-amber-50/85">
                    {fullDescription}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-amber-50/20 pt-4">
                  <p className="text-lg font-bold text-amber-100">
                    <span className="sr-only">价格：</span>
                    {formatPrice(price)}
                  </p>

                  <button
                    type="button"
                    onClick={closeModal}
                    className="rounded-full border border-amber-50/40 px-4 py-2 text-sm font-medium transition hover:bg-amber-50 hover:text-stone-950"
                  >
                    收起来
                  </button>
                </div>
              </section>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}