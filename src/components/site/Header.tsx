"use client";

import { siteConfig } from "@/config/site";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const config = {
  name: siteConfig.name,
  logo: siteConfig.logo,
  whatsapp: siteConfig.whatsapp,
};

const navItems = [
  {
    label: "首页",
    href: "/",
  },
  {
    label: "关于我们",
    href: "/about",
  },
  {
    label: "服务",
    href: "/services",
  },
  {
    label: "联系",
    href: "/contact",
  },
];

function getWhatsappUrl() {
  const message = encodeURIComponent(`你好，我想了解 ${config.name} 的服务。`);

  return `https://wa.me/${config.whatsapp}?text=${message}`;
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = getWhatsappUrl();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        const shouldBeScrolled = window.scrollY > 100;

        setScrolled((current) => {
          if (current === shouldBeScrolled) {
            return current;
          }

          return shouldBeScrolled;
        });

        ticking = false;
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const solidHeader = scrolled || isOpen;

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      )}
    >
      <div
        className={clsx(
          "absolute inset-0 -z-10 bg-[url('/images/nav-bg.jpg')] bg-cover bg-center transition-opacity duration-500",
          solidHeader ? "opacity-100" : "opacity-0",
        )}
      />

      <div className="mx-auto relative z-20 flex flex-row justify-between py-3 px-6 max-w-7xl">
        {/* logo */}
        <Link href="/" className="flex items-center font-bold">
          {config.logo}
        </Link>

        {/* 桌面端 */}
        <div className="hidden items-center gap-6 md:flex">
          {/* nav列表 */}
          <nav className="flex gap-6 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium  transition hover:text-stone-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* whatsapp */}
          <div className="flex items-center ">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-4 py-2 text-sm font-semibold border transition hover:bg-stone-800"
            >
              WhatsApp 咨询
            </a>
          </div>
        </div>

        {/* 移动端 */}

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex items-center justify-center rounded-lg border p-2 transition hover:bg-stone-100 md:hidden"
          aria-label="打开菜单"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <span className="text-xl leading-none">×</span>
          ) : (
            <span className="text-xl leading-none">☰</span>
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{
              opacity: 0,
              y: -220,
              scaleY: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scaleY: 1,
            }}
            exit={{
              opacity: 0,
              y: -220,
              scaleY: 0.96,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            className="absolute left-0 top-full bg-[url('/images/nav-bg.jpg')] bg-cover bg-center z-10 w-full border-b border-t border-white/63 shadow-lg md:hidden"
          >
            <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-stone-100 hover:text-stone-950"
                >
                  {item.label}
                </Link>
              ))}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-3 rounded-full border px-4 py-2 text-center text-sm font-semibold transition hover:bg-stone-800 hover:text-white"
              >
                WhatsApp 咨询
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
