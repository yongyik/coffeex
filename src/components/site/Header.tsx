"use client";

import { siteConfig } from "@/config/site";
import {
  getLocalizedPath,
  replaceLocaleInPath,
} from "@/i18n/config";
import type { Dictionary, Locale } from "@/i18n/types";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface HeaderProps {
  locale: Locale;
  dictionary: Dictionary["header"];
}

interface LanguageSwitcherProps {
  locale: Locale;
  label: string;
  onNavigate?: () => void;
}

function LanguageSwitcher({ locale, label, onNavigate }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  function switchLanguage(nextLocale: Locale) {
    if (nextLocale === locale) return;

    const nextPath = replaceLocaleInPath(pathname, nextLocale);
    const hash = window.location.hash;
    onNavigate?.();
    router.push(`${nextPath}${hash}`);
  }

  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center rounded-full border border-amber-50/50 p-1 text-xs"
    >
      <button
        type="button"
        onClick={() => switchLanguage("zh")}
        aria-pressed={locale === "zh"}
        className={clsx(
          "min-h-9 rounded-full px-2.5 transition hover:bg-amber-50/15 hover:text-amber-100",
          locale === "zh" && "bg-amber-50 text-stone-950",
        )}
      >
        中
      </button>
      <span aria-hidden="true" className="px-1 text-amber-50/60">
        /
      </span>
      <button
        type="button"
        onClick={() => switchLanguage("en")}
        aria-pressed={locale === "en"}
        className={clsx(
          "min-h-9 rounded-full px-2.5 transition hover:bg-amber-50/15 hover:text-amber-100",
          locale === "en" && "bg-amber-50 text-stone-950",
        )}
      >
        EN
      </button>
    </div>
  );
}

export function Header({ locale, dictionary }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const whatsappUrl = getWhatsAppUrl(locale);

  const navItems = [
    { label: dictionary.nav.home, href: getLocalizedPath(locale) },
    { label: dictionary.nav.about, href: getLocalizedPath(locale, "/about") },
    { label: dictionary.nav.menu, href: getLocalizedPath(locale, "/menu") },
    { label: dictionary.nav.contact, href: getLocalizedPath(locale, "/contact") },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 100);
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

    window.requestAnimationFrame(() => {
      mobilePanelRef.current
        ?.querySelector<HTMLElement>(focusableSelector)
        ?.focus();
    });

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = mobilePanelRef.current?.querySelectorAll<HTMLElement>(
        focusableSelector,
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function closeMenuAndRestoreFocus() {
    setIsOpen(false);
    window.requestAnimationFrame(() => menuButtonRef.current?.focus());
  }

  const solidHeader = scrolled || isOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      <div
        aria-hidden="true"
        className={clsx(
          "absolute inset-0 -z-10 bg-[url('/images/nav-bg.webp')] bg-cover bg-center transition-opacity duration-500",
          solidHeader ? "opacity-100" : "opacity-0",
        )}
      />

      <div className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href={getLocalizedPath(locale)} className="flex min-w-0 items-center font-bold">
          {siteConfig.logo}
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <nav className="flex items-center gap-4" aria-label={dictionary.mainNavigation}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={clsx(
                  "text-sm font-medium transition hover:text-amber-200",
                  pathname === item.href &&
                    "font-bold underline decoration-amber-100 underline-offset-4",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border px-3 py-2 text-sm font-semibold transition hover:bg-amber-50/15 hover:text-amber-100"
          >
            {dictionary.whatsapp}
          </a>

          <LanguageSwitcher locale={locale} label={dictionary.languageSwitcher} />
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex size-11 items-center justify-center rounded-lg border transition hover:bg-amber-50/15 hover:text-amber-100 md:hidden"
          aria-label={isOpen ? dictionary.closeMenu : dictionary.openMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <span aria-hidden="true" className="text-xl leading-none">
            {isOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <>
            <button
              type="button"
              aria-label={dictionary.closeMenu}
              onClick={closeMenuAndRestoreFocus}
              className="fixed inset-0 z-0 bg-black/30 md:hidden"
            />
            <motion.div
              ref={mobilePanelRef}
              id="mobile-navigation"
              initial={{ opacity: 0, y: -220, scaleY: 0.96 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -220, scaleY: 0.96 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute left-0 top-full z-10 w-full border-b border-t border-white/63 bg-[url('/images/nav-bg.webp')] bg-cover bg-center shadow-lg md:hidden"
            >
              <nav
                aria-label={dictionary.mobileNavigation}
                className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                    className={clsx(
                      "rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-amber-50/15 hover:text-amber-100",
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
                  className="mt-3 rounded-full border px-4 py-2 text-center text-sm font-semibold transition hover:bg-amber-50/15 hover:text-amber-100"
                >
                  {dictionary.whatsapp}
                </a>

                <div className="mt-3 flex justify-center">
                  <LanguageSwitcher
                    locale={locale}
                    label={dictionary.languageSwitcher}
                    onNavigate={() => setIsOpen(false)}
                  />
                </div>
              </nav>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
