"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { LocalizedMenuCategory } from "@/data/menu";
import type { Dictionary, Locale, MenuCategoryKey } from "@/i18n/types";
import MenuCard from "./MenuCard";

interface MenuPageClientProps {
  locale: Locale;
  menu: LocalizedMenuCategory[];
  dictionary: {
    menu: Dictionary["menu"];
    common: Dictionary["common"];
  };
}

export default function MenuPageClient({
  locale,
  menu,
  dictionary,
}: MenuPageClientProps) {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryKey>(
    menu[0]?.categoryKey ?? "hot",
  );

  useEffect(() => {
    const sections = menu
      .map((category) => document.getElementById(category.categoryKey))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveCategory(visible.target.id as MenuCategoryKey);
        }
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.05, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [menu]);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 pb-10 pt-24 lg:px-8">
      <header className="rounded-3xl border border-amber-500/50 bg-[url('/images/bg1.webp')] bg-cover bg-center px-5 py-8 text-center text-amber-50 shadow-lg sm:px-8">
        <h1 className="text-4xl font-bold lg:text-6xl">{dictionary.menu.pageTitle}</h1>
        <p className="mx-auto mt-3 max-w-2xl leading-7 text-amber-50/80">
          {dictionary.menu.pageDescription}
        </p>
      </header>

      <motion.nav
        initial={{ y: 32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        aria-label={dictionary.menu.categoryTitle}
        className="sticky top-16 z-30 min-h-16 rounded-2xl border border-amber-500/50 bg-[url('/images/bg1.webp')] bg-cover bg-center px-3 py-2 text-amber-50 shadow-lg"
      >
        <div className="flex min-h-12 flex-row items-center gap-2 overflow-x-auto md:justify-center md:overflow-visible">
          {menu.map((category) => {
            const isActive = activeCategory === category.categoryKey;
            return (
              <a
                key={category.categoryKey}
                href={`#${category.categoryKey}`}
                aria-current={isActive ? "location" : undefined}
                aria-label={
                  isActive
                    ? `${dictionary.menu.currentCategory}：${dictionary.menu.categories[category.categoryKey]}`
                    : dictionary.menu.categories[category.categoryKey]
                }
                onClick={() => setActiveCategory(category.categoryKey)}
                className={`flex h-11 min-w-32 shrink-0 items-center justify-center whitespace-nowrap rounded-xl border px-4 text-center text-sm font-medium transition hover:bg-amber-50/20 md:min-w-0 md:flex-1 md:text-base lg:max-w-56 ${
                  isActive
                    ? "border-amber-100 bg-amber-50/20"
                    : "border-amber-50/30 bg-amber-50/10"
                }`}
              >
                {dictionary.menu.categories[category.categoryKey]}
              </a>
            );
          })}
        </div>
      </motion.nav>

      <section className="flex flex-col gap-6 text-amber-50">
        {menu.map((category) => (
          <motion.div
            key={category.categoryKey}
            id={category.categoryKey}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="scroll-mt-36 rounded-2xl border border-amber-500/50 bg-[url('/images/bg1.webp')] bg-cover bg-center p-5 shadow-lg"
          >
            <h2 className="text-3xl font-bold">
              {dictionary.menu.categories[category.categoryKey]}
            </h2>

            <ul className="grid grid-cols-1 gap-4 px-3 py-4 md:grid-cols-2">
              {category.items.map((item) => (
                <li key={item.id} id={item.id} className="scroll-mt-36">
                  <MenuCard
                    locale={locale}
                    src={item.photo}
                    alt={item.name}
                    name={item.name}
                    description={item.description}
                    fullDescription={item.fullDescription}
                    price={item.price}
                    tags={item.tags}
                    options={item.options}
                    allergens={item.allergens}
                    labels={dictionary.common}
                    tagLabels={dictionary.menu.tags}
                    inquiryLabel={dictionary.menu.askAboutItem}
                    inquiryMessage={dictionary.menu.itemInquiryMessage}
                  />
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      <aside className="rounded-2xl border border-amber-50/20 bg-black/25 p-5 text-amber-50/75">
        <h2 className="text-lg font-semibold text-amber-100">{dictionary.menu.notesTitle}</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
          {dictionary.menu.notes.map((note) => <li key={note}>{note}</li>)}
        </ul>
      </aside>
    </div>
  );
}
