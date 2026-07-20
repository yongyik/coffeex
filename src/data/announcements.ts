import type { Locale } from "@/i18n/types";

export type AnnouncementType = "notice" | "new" | "holiday";

type LocalizedText = Record<Locale, string>;

export type Announcement = {
  id: string;
  date: string;
  title: LocalizedText;
  content: LocalizedText;
  type: AnnouncementType;
  isActive: boolean;
};

export const announcements: Announcement[] = [
  {
    id: "maintenance-hours-july-25",
    date: "2026-07-25",
    title: {
      zh: "7 月 25 日营业时间调整",
      en: "Adjusted opening hours on 25 July",
    },
    content: {
      zh: "因设备维护，当天营业时间调整为上午 10:00 至下午 6:00。",
      en: "Due to equipment maintenance, we will be open from 10:00 AM to 6:00 PM.",
    },
    type: "notice",
    isActive: true,
  },
  {
    id: "blueberry-cheesecake-available",
    date: "2026-07-20",
    title: {
      zh: "蓝莓乳酪蛋糕现已供应",
      en: "Blueberry cheesecake now available",
    },
    content: {
      zh: "每日数量有限，售完为止。",
      en: "Available in limited quantities each day while stocks last.",
    },
    type: "new",
    isActive: true,
  },
  {
    id: "public-holiday-arrangement",
    date: "2026-08-31",
    title: {
      zh: "公共假期营业安排",
      en: "Public holiday opening arrangement",
    },
    content: {
      zh: "公共假期将按周末时间营业，繁忙时段建议提前联系。",
      en: "Public holidays follow our weekend hours; please contact us ahead of busy periods.",
    },
    type: "holiday",
    isActive: true,
  },
];

export function getActiveAnnouncements(locale: Locale) {
  return announcements
    .filter((announcement) => announcement.isActive)
    .slice(0, 3)
    .map((announcement) => ({
      ...announcement,
      title: announcement.title[locale],
      content: announcement.content[locale],
    }));
}
