import type { Metadata } from "next";
import AboutSection from "@/components/about/AboutSection";
import Banner from "@/components/about/Banner";
import ImageGallery from "@/components/about/ImageGallery";
import SectionNav from "@/components/about/SectionNav";
import TeamMember from "@/components/about/TeamMember";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocaleOrNotFound } from "@/i18n/request";
import { createPageMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const sectionImages = [
  "/images/about/coffee-beans-in-hand.webp",
  "/images/about/barista-pouring-coffee.webp",
  "/images/about/green-coffee-shop-interior.webp",
  "/images/about/coffee-shop-team.webp",
];

const galleryImages = Array.from(
  { length: 6 },
  (_, index) => `/images/about/environment-${index + 1}.webp`,
);

const galleryLayouts = [
  { aspect: "aspect-[3/4]" },
  { aspect: "aspect-[4/5]" },
  { aspect: "aspect-square" },
  { aspect: "aspect-[3/4]" },
  { aspect: "aspect-[4/3]", featured: true },
  { aspect: "aspect-[2/3]" },
];

const teamImages = [
  "/images/about/team-shopkeeper.webp",
  "/images/about/team-barista1.webp",
  "/images/about/team-barista2.webp",
];

const teamAspects = ["aspect-[4/5]", "aspect-[4/3]", "aspect-[3/4]"];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = getLocaleOrNotFound((await params).locale);
  return createPageMetadata(locale, "about");
}

export default async function AboutPage({ params }: PageProps) {
  const locale = getLocaleOrNotFound((await params).locale);
  const dictionary = getDictionary(locale).about;

  return (
    <div className="mx-auto w-full max-w-7xl bg-black/20 text-amber-100">
      <Banner
        title={dictionary.bannerTitle}
        src="/images/about/header.webp"
        alt={dictionary.bannerAlt}
      />

      <SectionNav
        ariaLabel={dictionary.sectionNavigation}
        links={[
          { href: "#story", label: dictionary.nav.story },
          { href: "#space", label: dictionary.nav.space },
          { href: "#team", label: dictionary.nav.team },
        ]}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        {dictionary.sections.map((section, index) => (
          <AboutSection
            key={section.subtitle}
            id={index === 0 ? "story" : undefined}
            title={section.title}
            subtitle={section.subtitle}
            paragraphs={section.paragraphs}
            image={{ src: sectionImages[index], alt: section.imageAlt }}
            reverse={index % 2 === 1}
            imageAspect={index === 1 ? "aspect-[3/4]" : "aspect-[4/5]"}
          />
        ))}

        <section aria-labelledby="values-title" className="py-12">
          <h2 id="values-title" className="text-4xl font-bold lg:text-center lg:text-6xl">
            {dictionary.valuesTitle}
          </h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            {dictionary.values.map((value, index) => (
              <li key={value.title} className="rounded-2xl border border-amber-50/20 bg-black/20 p-5 shadow-lg">
                <span className="text-sm font-semibold tracking-[0.25em] text-amber-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-2xl font-semibold">{value.title}</h3>
                <p className="mt-3 leading-7 text-amber-50/80">{value.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <ImageGallery
          id="space"
          title={dictionary.galleryTitle}
          images={galleryImages.map((src, index) => ({
            src,
            alt: dictionary.galleryAlts[index],
            ...galleryLayouts[index],
          }))}
        />

        <TeamMember
          id="team"
          title={dictionary.teamTitle}
          favoriteLabel={dictionary.favoriteLabel}
          members={dictionary.members.map((member, index) => ({
            src: teamImages[index],
            alt: member.alt,
            name: member.name,
            role: member.role,
            desc: member.description,
            favorite: member.favorite,
            aspect: teamAspects[index],
          }))}
        />
      </div>
    </div>
  );
}
