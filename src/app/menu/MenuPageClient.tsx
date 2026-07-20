"use client";

import { motion } from "framer-motion";
import MenuCard from "../../components/menu/MenuCard";
import { menu } from "../../data/menu";

export default function MenuPageClient() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-8 pt-20 lg:px-8">
      <h1 className="sr-only">晨木咖啡菜单</h1>
      <motion.nav
        initial={{ y: 32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        aria-label="菜单分类"
        className="rounded-2xl border border-amber-500/50 bg-[url('/images/bg1.webp')] bg-cover bg-center p-4 text-amber-50 shadow-lg"
      >
        <h2 className="pb-3 text-center text-3xl font-bold">分类</h2>

        <div className="flex flex-row gap-2 overflow-x-auto pb-1 md:grid md:grid-cols-4 md:overflow-visible">
          {menu.map((category) => (
            <a
              key={category.categoryKey}
              href={`#${category.categoryKey}`}
              className="flex h-11 min-w-32 shrink-0 items-center justify-center whitespace-nowrap rounded-xl border border-amber-50/30 bg-amber-50/10 px-4 text-center text-base font-medium transition hover:bg-amber-50/20 md:min-w-0 lg:text-xl"
            >
              {category.category}
            </a>
          ))}
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
            className="scroll-mt-24 rounded-2xl border border-amber-500/50 bg-[url('/images/bg1.webp')] bg-cover bg-center p-5 shadow-lg"
          >
            <h2 className="text-3xl font-bold">{category.category}</h2>

            <ul className="grid grid-cols-1 gap-4 py-4 px-3 md:grid-cols-2">
              {category.items.map((item) => (
                <li key={item.id}>
                  <MenuCard
                    src={item.photo}
                    alt={item.name}
                    name={item.name}
                    description={item.description}
                    fullDescription={item.fullDescription}
                    price={item.price}
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
