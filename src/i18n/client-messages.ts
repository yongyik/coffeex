import type { Dictionary, Locale } from "./types";

export const notFoundMessages: Record<Locale, Dictionary["notFound"]> = {
  zh: {
    title: "看来这张桌子暂时是空的。",
    description: "你要找的页面不存在，或者已经被移动。",
    home: "返回首页",
    menu: "查看菜单",
  },
  en: {
    title: "Looks like this table is empty.",
    description: "The page you are looking for could not be found or may have been moved.",
    home: "Back to Home",
    menu: "View Menu",
  },
};
