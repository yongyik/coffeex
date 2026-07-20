"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { LocalizedMenuCategory } from "@/data/menu";
import type { Dictionary, MenuCategoryKey } from "@/i18n/types";
import MenuCard from "./MenuCard";

interface MenuPageClientProps {
  menu: LocalizedMenuCategory[];
  dictionary: {
    menu: Dictionary["menu"];
    common: Dictionary["common"];
  };
}

export default function MenuPageClient({ menu, dictionary }: MenuPageClientProps) {
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
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-8 pt-20 lg:px-8">
      <h1 className="sr-only">{dictionary.menu.pageTitle}</h1>

      <motion.nav
        initial={{ y: 32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        aria-label={dictionary.menu.categoryTitle}
        className="sticky top-16 z-30 rounded-2xl border border-amber-500/50 bg-[url('/images/bg1.webp')] bg-cover bg-center p-4 text-amber-50 shadow-lg"
      >
        <h2 className="pb-3 text-center text-3xl font-bold">
          {dictionary.menu.categoryTitle}
        </h2>

        <div className="flex flex-row gap-2 overflow-x-auto pb-1 md:grid md:grid-cols-4 md:overflow-visible">
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
                className={`flex h-11 min-w-32 shrink-0 items-center justify-center whitespace-nowrap rounded-xl border px-4 text-center text-base font-medium transition hover:bg-amber-50/20 md:min-w-0 lg:text-xl ${
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
            className="scroll-mt-52 rounded-2xl border border-amber-500/50 bg-[url('/images/bg1.webp')] bg-cover bg-center p-5 shadow-lg"
          >
            <h2 className="text-3xl font-bold">
              {dictionary.menu.categories[category.categoryKey]}
            </h2>

            <ul className="grid grid-cols-1 gap-4 px-3 py-4 md:grid-cols-2">
              {category.items.map((item) => (
                <li key={item.id} id={item.id} className="scroll-mt-52">
                  <MenuCard
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
                  />
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
