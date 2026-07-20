"use client";

import { siteConfig } from "@/config/site";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const config = {
  logo: siteConfig.logo,
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
    label: "菜单",
    href: "/menu",
  },
  {
    label: "联系",
    href: "/contact",
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = getWhatsAppUrl();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

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

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const solidHeader = scrolled || isOpen;

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      )}
    >
      <div
        className={clsx(
          "absolute inset-0 -z-10 bg-[url('/images/nav-bg.webp')] bg-cover bg-center transition-opacity duration-500",
          solidHeader ? "opacity-100" : "opacity-0",
        )}
      />

      <div className="mx-auto relative z-20 flex flex-row justify-between py-3 px-6 max-w-7xl">
        {/* logo */}
        <Link href="/" className="flex min-w-0 items-center font-bold">
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
                aria-current={pathname === item.href ? "page" : undefined}
                className={clsx(
                  "text-sm font-medium transition hover:text-stone-950",
                  pathname === item.href &&
                    "font-bold underline decoration-amber-100 underline-offset-4",
                )}
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
          ref={menuButtonRef}
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex items-center justify-center rounded-lg border p-2 transition hover:bg-stone-100 md:hidden"
          aria-label={isOpen ? "关闭菜单" : "打开菜单"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
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
          <>
            <button
              type="button"
              aria-label="关闭菜单"
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-0 bg-black/30 md:hidden"
            />
            <motion.div
              id="mobile-navigation"
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
              className="absolute left-0 top-full z-10 w-full border-b border-t border-white/63 bg-[url('/images/nav-bg.webp')] bg-cover bg-center shadow-lg md:hidden"
            >
              <nav
                aria-label="手机导航"
                className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                    className={clsx(
                      "rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-stone-100 hover:text-stone-950",
                      pathname === item.href && "bg-amber-50/15 font-bold",
                    )}
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
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
