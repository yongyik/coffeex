import type { Metadata } from "next";
import ImageLinkSection from "@/components/home/ImageLinkSection";
import Hero from "@/components/home/HeroSection";
import BusinessInfoStrip from "@/components/home/BusinessInfoStrip";
import HeroSlider from "@/components/swiper/HeroSlider";
import { getActiveAnnouncements } from "@/data/announcements";
import { getLocalizedMenu } from "@/data/menu";
import { getLocalizedTestimonials } from "@/data/testimonials";
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
  const activeAnnouncements = getActiveAnnouncements(locale);
  const localizedTestimonials = getLocalizedTestimonials(locale);
  const dateFormatter = new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en-MY", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
  const menuHref = getLocalizedPath(locale, "/menu");
  const contactHref = getLocalizedPath(locale, "/contact");
  const whatsappHref = getWhatsAppUrl(locale);

  return (
    <div className="mx-auto mb-20 max-w-7xl space-y-8 overflow-hidden">
      <Hero
        src="/images/hero-bg1.webp"
        alt={dictionary.home.heroAlt}
        title={dictionary.home.heroTitle}
        desc={dictionary.home.heroDescription}
        menuHref={menuHref}
        menuLabel={dictionary.home.viewMenu}
        whatsappHref={whatsappHref}
        whatsappLabel={dictionary.home.messageUs}
      />

      <section aria-labelledby="announcements-heading" className="px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-amber-500/40 bg-[url('/images/bg1.webp')] bg-cover bg-center p-5 text-amber-50 shadow-lg sm:p-6">
          <div className="max-w-2xl">
            <h2 id="announcements-heading" className="text-2xl font-bold sm:text-3xl">
              {dictionary.home.announcements.heading}
            </h2>
            <p className="mt-2 text-sm leading-6 text-amber-50/75">
              {dictionary.home.announcements.description}
            </p>
          </div>
          <ul className="mt-5 grid gap-4 lg:grid-cols-3">
            {activeAnnouncements.map((announcement) => (
              <li
                key={announcement.id}
                className="min-w-0 rounded-2xl border border-amber-50/20 bg-black/25 p-4"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs text-amber-200">
                  <span className="rounded-full border border-amber-200/30 px-2.5 py-1">
                    {dictionary.home.announcements.typeLabels[announcement.type]}
                  </span>
                  <time dateTime={announcement.date}>
                    {dateFormatter.format(new Date(`${announcement.date}T00:00:00Z`))}
                  </time>
                </div>
                <h3 className="mt-3 text-lg font-semibold">{announcement.title}</h3>
                <p className="mt-2 text-sm leading-6 text-amber-50/80">
                  {announcement.content}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="featured-drinks-title">
        <div className="px-4 text-center sm:px-6">
          <h2 id="featured-drinks-title" className="text-4xl font-bold lg:text-6xl">
            {dictionary.home.recommended}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-amber-50/80">
            {dictionary.home.carouselDescription}
          </p>
        </div>

        <HeroSlider
          locale={locale}
          items={swiperItems}
          dictionary={dictionary.home.carousel}
          priceLabel={dictionary.common.price}
        />
      </section>

      <BusinessInfoStrip locale={locale} dictionary={dictionary.home.businessInfo} />

      <section aria-labelledby="explore-title" className="px-4 sm:px-6 lg:px-8">
        <h2 id="explore-title" className="sr-only">{dictionary.home.exploreTitle}</h2>
        <div className="grid gap-4 lg:grid-cols-2 lg:grid-rows-2">
          <ImageLinkSection
            href={`${getLocalizedPath(locale, "/about")}#story`}
            src="/images/home/link-story.webp"
            alt={dictionary.home.storyAlt}
            text={dictionary.home.storyLink}
            className="min-h-72 lg:row-span-2 lg:min-h-[36rem]"
            imagePosition="object-center"
          />
          <ImageLinkSection
            href={`${getLocalizedPath(locale, "/about")}#space`}
            src="/images/home/link-space.webp"
            alt={dictionary.home.spaceAlt}
            text={dictionary.home.spaceLink}
            className="min-h-64"
            imagePosition="object-center"
          />
          <ImageLinkSection
            href={`${getLocalizedPath(locale, "/about")}#team`}
            src="/images/home/link-team.webp"
            alt={dictionary.home.teamAlt}
            text={dictionary.home.teamLink}
            className="min-h-64"
            imagePosition="object-[center_35%]"
          />
        </div>
      </section>

      <section aria-labelledby="testimonials-title" className="px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-amber-500/40 bg-[url('/images/bg1.webp')] bg-cover bg-center p-5 text-amber-50 shadow-lg sm:p-7">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="testimonials-title" className="text-3xl font-bold lg:text-5xl">
              {dictionary.home.testimonials.heading}
            </h2>
            <p className="mt-3 leading-7 text-amber-50/80">
              {dictionary.home.testimonials.description}
            </p>
          </div>
          <ul className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {localizedTestimonials.map((testimonial) => (
              <li
                key={testimonial.id}
                className="flex h-full flex-col rounded-2xl border border-amber-50/20 bg-black/25 p-5"
              >
                <p className="text-amber-200" aria-label={dictionary.home.testimonials.ratingLabel}>
                  <span aria-hidden="true">{"★".repeat(testimonial.rating)}</span>
                </p>
                <blockquote className="mt-4 flex-1 text-sm leading-7 text-amber-50/85">
                  “{testimonial.quote}”
                </blockquote>
                <div className="mt-5 border-t border-amber-50/15 pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-amber-200">{testimonial.role}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-center text-xs leading-5 text-amber-50/55">
            {dictionary.home.testimonials.notice}
          </p>
        </div>
      </section>

      <section className="mx-4 rounded-3xl border border-amber-500/40 bg-[url('/images/bg1.webp')] bg-cover bg-center px-5 py-10 text-center text-amber-50 shadow-lg sm:mx-6 lg:mx-8 lg:py-14">
        <h2 className="text-3xl font-bold lg:text-5xl">{dictionary.home.finalCta.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-amber-50/80">
          {dictionary.home.finalCta.description}
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href={menuHref} className="inline-flex min-h-11 items-center rounded-full bg-amber-100 px-5 py-2.5 font-semibold text-stone-950 transition hover:bg-white">
            {dictionary.home.finalCta.menu}
          </a>
          <a href={`${contactHref}#location`} className="inline-flex min-h-11 items-center rounded-full border border-amber-50/50 bg-black/20 px-5 py-2.5 font-semibold transition hover:bg-amber-50/15 hover:text-amber-100">
            {dictionary.home.finalCta.visit}
          </a>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center rounded-full border border-amber-50/50 bg-black/20 px-5 py-2.5 font-semibold transition hover:bg-amber-50/15 hover:text-amber-100">
            {dictionary.home.finalCta.whatsapp}
          </a>
        </div>
      </section>
    </div>
  );
}
