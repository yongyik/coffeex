"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Dictionary, Locale, MenuTagKey } from "@/i18n/types";
import { buildMenuItemInquiryMessage, getWhatsAppUrl } from "@/lib/whatsapp";

interface Props {
  locale: Locale;
  src: string;
  alt: string;
  name: string;
  description: string;
  fullDescription: string;
  price: number;
  tags: MenuTagKey[];
  options: string[];
  allergens: string[];
  labels: Dictionary["common"];
  tagLabels: Dictionary["menu"]["tags"];
  inquiryLabel: string;
  inquiryMessage: string;
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-MY", {
    style: "currency",
    currency: "MYR",
  }).format(price);
}

export default function MenuCard({
  locale,
  src,
  alt,
  name,
  description,
  fullDescription,
  price,
  tags,
  options,
  allergens,
  labels,
  tagLabels,
  inquiryLabel,
  inquiryMessage,
}: Props) {
  const [showMore, setShowMore] = useState(false);
  const titleId = useId();
  const descriptionId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const inquiryUrl = getWhatsAppUrl(
    locale,
    buildMenuItemInquiryMessage(inquiryMessage, name),
  );

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
    const triggerElement = triggerRef.current;
    document.body.style.overflow = "hidden";

    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    function handleDialogKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeModal();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements?.length) {
        event.preventDefault();
        dialogRef.current?.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleDialogKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleDialogKeyDown);
      triggerElement?.focus();
    };
  }, [showMore]);

  return (
    <>
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-amber-50/30 bg-amber-50/10 shadow-md transition hover:bg-amber-50/15 sm:flex-row">
        <figure className="relative h-72 w-full shrink-0 overflow-hidden bg-black/20 sm:h-60 sm:w-40 lg:h-68 lg:w-44">
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

            {tags.length ? (
              <ul aria-label={labels.tags} className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-amber-50/25 bg-black/20 px-2.5 py-1 text-xs text-amber-100"
                  >
                    {tagLabels[tag]}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="flex items-center justify-between gap-3">
            <p className="font-semibold text-amber-100">
              <span className="sr-only">{labels.price}：</span>
              {formatPrice(price)}
            </p>

            <button
              ref={triggerRef}
              type="button"
              onClick={openModal}
              className="text-sm font-medium underline underline-offset-4 transition hover:text-amber-200"
            >
              {labels.learnMore}
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
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              aria-describedby={descriptionId}
              tabIndex={-1}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl border border-amber-300 bg-[url('/images/bg1.webp')] bg-cover bg-center p-6 text-amber-100 shadow-2xl"
              initial={{ scale: 0.92, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 24 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeModal}
                aria-label={labels.close}
                className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full border border-amber-50/30 bg-black/30 text-xl leading-none text-amber-50 transition hover:bg-amber-50 hover:text-stone-950"
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
                  <h2 id={titleId} className="text-4xl font-bold">
                    {name}
                  </h2>

                  <p
                    id={descriptionId}
                    className="mt-4 text-sm leading-7 text-amber-50/85"
                  >
                    {fullDescription}
                  </p>
                </div>

                {tags.length || options.length || allergens.length ? (
                  <div className="space-y-3 border-t border-amber-50/20 pt-4 text-sm">
                    {tags.length ? (
                      <div>
                        <h3 className="font-semibold text-amber-100">{labels.tags}</h3>
                        <p className="mt-1 text-amber-50/85">
                          {tags.map((tag) => tagLabels[tag]).join(" · ")}
                        </p>
                      </div>
                    ) : null}
                    {options.length ? (
                      <div>
                        <h3 className="font-semibold text-amber-100">{labels.options}</h3>
                        <p className="mt-1 text-amber-50/85">{options.join(" · ")}</p>
                      </div>
                    ) : null}
                    {allergens.length ? (
                      <div>
                        <h3 className="font-semibold text-amber-100">{labels.allergens}</h3>
                        <p className="mt-1 text-amber-50/85">{allergens.join(" · ")}</p>
                      </div>
                    ) : null}
                  </div>
                ) : null}

                <div className="flex items-center justify-between border-t border-amber-50/20 pt-4">
                  <p className="text-lg font-bold text-amber-100">
                    <span className="sr-only">{labels.price}：</span>
                    {formatPrice(price)}
                  </p>

                  <button
                    type="button"
                    onClick={closeModal}
                    className="rounded-full border border-amber-50/40 px-4 py-2 text-sm font-medium transition hover:bg-amber-50 hover:text-stone-950"
                  >
                    {labels.collapse}
                  </button>
                </div>

                <a
                  href={inquiryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-amber-100 px-5 py-3 text-center font-semibold text-stone-950 transition hover:bg-white"
                >
                  {inquiryLabel}
                </a>
              </section>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
