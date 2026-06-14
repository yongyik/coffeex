import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import MenuPageClient from "./MenuPageClient";

export const metadata: Metadata = {
  title: "菜单",
  description:
    "查看 MyCoffee 的咖啡、特调饮品、甜品与轻食菜单，包含价格、饮品介绍与推荐项目。",

  alternates: {
    canonical: "/menu",
  },

  openGraph: {
    title: `菜单 | ${siteConfig.name}`,
    description:
      "查看 MyCoffee 的咖啡菜单、推荐饮品、甜品与特调饮品。",
    url: "/menu",
  },
};

export default function MenuPage() {
  return <MenuPageClient />;
}