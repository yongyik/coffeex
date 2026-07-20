import type { Locale } from "@/i18n/types";

const localized = <T>(zh: T, en: T): Record<Locale, T> => ({ zh, en });

export const siteConfig = {
  name: "Morning Oak Coffee",
  nameZh: "晨木咖啡",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
    /\/$/,
    "",
  ),

  description: localized(
    "晨木咖啡是一家位于 Kuala Lumpur Mont Kiara 的温暖咖啡店，提供手工咖啡、特调饮品、甜点与舒适空间。",
    "Morning Oak Coffee is a welcoming neighbourhood café in Mont Kiara, Kuala Lumpur, serving handcrafted coffee, signature drinks, and desserts.",
  ),

  logo: "Morning Oak",
  tagline: localized("一杯好咖啡，一段慢时光。", "Good coffee, slow mornings."),

  phone: "+60 12-888 6620",
  phoneHref: "+60128886620",
  whatsapp: "60128886620",
  email: "hello@morningoakcoffee.com",
  address: "18, Jalan Solaris 3, Mont Kiara, 50480 Kuala Lumpur, Malaysia",
  area: "Mont Kiara, Kuala Lumpur",
  priceRange: "RM 8–13",
  instagramHandle: "@morningoakcoffee",
  defaultWhatsAppMessage: localized(
    "晨木咖啡，你好，我想了解店内服务。",
    "Hello Morning Oak Coffee, I would like to learn more about your café.",
  ),
  portfolioNotice: localized(
    "本网站为虚构作品集案例，仅用于展示。",
    "This is a fictional portfolio project created for demonstration purposes.",
  ),
  businessHours: [
    {
      day: localized("星期一至星期五", "Monday–Friday"),
      time: localized("上午 8:00 至晚上 8:00", "8:00 AM–8:00 PM"),
      schemaDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
    {
      day: localized("星期六至星期日", "Saturday–Sunday"),
      time: localized("上午 9:00 至晚上 9:00", "9:00 AM–9:00 PM"),
      schemaDays: ["Saturday", "Sunday"],
      opens: "09:00",
      closes: "21:00",
    },
  ],
};
