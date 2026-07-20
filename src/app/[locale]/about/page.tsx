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

const teamImages = [
  "/images/about/team-shopkeeper.webp",
  "/images/about/team-barista1.webp",
  "/images/about/team-barista2.webp",
];

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

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
        {dictionary.sections.map((section, index) => (
          <AboutSection
            key={section.subtitle}
            id={index === 0 ? "story" : undefined}
            title={section.title}
            subtitle={section.subtitle}
            paragraphs={section.paragraphs}
            image={{ src: sectionImages[index], alt: section.imageAlt }}
          />
        ))}

        <ImageGallery
          id="space"
          title={dictionary.galleryTitle}
          images={galleryImages.map((src, index) => ({
            src,
            alt: dictionary.galleryAlts[index],
          }))}
        />

        <TeamMember
          id="team"
          title={dictionary.teamTitle}
          members={dictionary.members.map((member, index) => ({
            src: teamImages[index],
            alt: member.alt,
            name: member.name,
            desc: member.description,
          }))}
        />
      </div>
    </div>
  );
}
