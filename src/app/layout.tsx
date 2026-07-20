import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteConfig.name} | Kuala Lumpur 手工咖啡店`,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [
    "咖啡店",
    "Kuala Lumpur cafe",
    "手工咖啡",
    "拿铁",
    "美式咖啡",
    "甜品",
    "咖啡菜单",
    "Morning Oak Coffee",
    "晨木咖啡",
  ],

  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: `${siteConfig.name} | Kuala Lumpur 手工咖啡店`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "zh_MY",
    type: "website",
    images: [
      {
        url: "/images/hero-bg1.webp",
        alt: `${siteConfig.name} 咖啡店`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Kuala Lumpur 手工咖啡店`,
    description: siteConfig.description,
    images: ["/images/hero-bg1.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: siteConfig.name,
    alternateName: siteConfig.nameZh,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/hero-bg1.webp`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "RM 8–13",
    address: {
      "@type": "PostalAddress",
      streetAddress: "18, Jalan Solaris 3, Mont Kiara",
      postalCode: "50480",
      addressLocality: "Kuala Lumpur",
      addressCountry: "MY",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    sameAs: siteConfig.social.instagram
      ? [siteConfig.social.instagram]
      : undefined,
  };

  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col text-amber-50">
        <a href="#main-content" className="skip-link">
          跳到主要内容
        </a>
        {/* 全站固定背景图 */}
        <div
          aria-hidden="true"
          className="fixed inset-0 z-0 bg-[url('/images/site-bg.webp')] bg-cover bg-center"
        />
        {/* 保留原有深色遮罩，让图片上的文字保持清楚 */}
        <div aria-hidden="true" className="fixed inset-0 z-0 bg-black/40" />

        <Header />
        <main
          id="main-content"
          tabIndex={-1}
          className="relative z-10 min-h-screen"
        >
          {children}
        </main>
        <div className="relative z-10">
          <Footer />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
