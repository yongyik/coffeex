import type { Metadata } from "next";
import ImageLinkSection from "@/components/home/ImageLinkSection";
import Hero from "@/components/home/HeroSection";
import HeroSlider from "@/components/swiper/HeroSlider";
import { getLocalizedMenu } from "@/data/menu";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocalizedPath } from "@/i18n/config";
import { getLocaleOrNotFound } from "@/i18n/request";
import { createPageMetadata } from "@/lib/metadata";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = getLocaleOrNotFound((await params).locale);
  return createPageMetadata(locale, "home");
}

export default async function HomePage({ params }: PageProps) {
  const locale = getLocaleOrNotFound((await params).locale);
  const dictionary = getDictionary(locale);
  const swiperItems = getLocalizedMenu(locale).flatMap((category) =>
    category.items.filter((item) => item.inSwiper),
  );

  return (
    <div className="mx-auto mb-20 max-w-7xl space-y-2">
      <Hero
        src="/images/hero-bg1.webp"
        alt={dictionary.home.heroAlt}
        title={dictionary.home.heroTitle}
        desc={dictionary.home.heroDescription}
        menuHref={getLocalizedPath(locale, "/menu")}
        menuLabel={dictionary.home.viewMenu}
        whatsappHref={getWhatsAppUrl(locale)}
        whatsappLabel={dictionary.home.messageUs}
      />

      <h2 className="w-full p-2 text-center text-4xl font-bold lg:py-6 lg:text-6xl">
        {dictionary.home.recommended}
      </h2>

      <HeroSlider
        locale={locale}
        items={swiperItems}
        dictionary={dictionary.home.carousel}
        priceLabel={dictionary.common.price}
      />

      <ImageLinkSection
        href={`${getLocalizedPath(locale, "/about")}#story`}
        src="/images/home/link-story.webp"
        alt={dictionary.home.storyAlt}
        text={dictionary.home.storyLink}
      />
      <ImageLinkSection
        href={`${getLocalizedPath(locale, "/about")}#space`}
        src="/images/home/link-space.webp"
        alt={dictionary.home.spaceAlt}
        text={dictionary.home.spaceLink}
      />
      <ImageLinkSection
        href={`${getLocalizedPath(locale, "/about")}#team`}
        src="/images/home/link-team.webp"
        alt={dictionary.home.teamAlt}
        text={dictionary.home.teamLink}
      />
    </div>
  );
}
