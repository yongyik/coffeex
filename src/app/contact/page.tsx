import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "联系我们",
  description:
    `联系${siteConfig.nameZh}查询菜单、座位、营业时间或合作事项。你可以通过 WhatsApp、电话、Email 或 Google Map 找到我们。`,

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: `联系我们 | ${siteConfig.name}`,
    description:
      `通过 WhatsApp、电话或 Email 联系${siteConfig.nameZh}，也可以查看 Google Map 店铺位置。`,
    url: "/contact",
    images: ["/images/contact/header.webp"],
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
