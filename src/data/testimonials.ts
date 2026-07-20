import type { Locale } from "@/i18n/types";

type LocalizedText = Record<Locale, string>;

export type Testimonial = {
  id: string;
  name: string;
  role: LocalizedText;
  quote: LocalizedText;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "local-resident",
    name: "Mei L.",
    role: { zh: "附近居民", en: "Local Resident" },
    quote: {
      zh: "环境安静舒服，冰拿铁顺滑，平日下午也很适合带电脑过来坐一会儿。",
      en: "A quiet and comfortable space with a smooth iced latte—ideal for getting a little work done on weekday afternoons.",
    },
    rating: 5,
  },
  {
    id: "remote-worker",
    name: "Daniel K.",
    role: { zh: "远程工作者", en: "Remote Worker" },
    quote: {
      zh: "座位舒适，店里节奏刚刚好。需要专注时，我通常会点一杯美式慢慢喝。",
      en: "Comfortable seating and an easy pace. An Americano here makes a focused work session feel much less rushed.",
    },
    rating: 5,
  },
  {
    id: "weekend-visitor",
    name: "Aisha R.",
    role: { zh: "周末访客", en: "Weekend Visitor" },
    quote: {
      zh: "周末和朋友来分享甜点很放松，店员亲切，也会耐心介绍当天供应的选择。",
      en: "A relaxed weekend stop for sharing dessert with friends, with warm service and helpful recommendations.",
    },
    rating: 5,
  },
];

export function getLocalizedTestimonials(locale: Locale) {
  return testimonials.map((testimonial) => ({
    ...testimonial,
    role: testimonial.role[locale],
    quote: testimonial.quote[locale],
  }));
}
