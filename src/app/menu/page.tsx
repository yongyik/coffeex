import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import ContactPageClient from "../contact/ContactPageClient";

export const metadata: Metadata = {
  title: "联系我们",
  description:
    "联系 MyCoffee 查询菜单、预订座位、了解营业时间或合作事项。你可以通过 WhatsApp、电话、Email 或 Google Map 找到我们。",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: `联系我们 | ${siteConfig.name}`,
    description:
      "通过 WhatsApp、电话或 Email 联系 MyCoffee，也可以查看 Google Map 店铺位置。",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}