import ImageLinkSection from "@/components/home/ImageLinkSection";
import Hero from "@/components/home/HeroSection";
import HeroSlider from "@/components/swiper/HeroSlider";
import { menu } from "@/data/menu";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "首页",
  description:
    `欢迎来到${siteConfig.nameZh}，一家位于 Kuala Lumpur Mont Kiara 的温暖咖啡店。探索推荐饮品、咖啡空间、品牌故事与团队介绍。`,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: `首页 | ${siteConfig.name}`,
    description: `探索${siteConfig.nameZh}的手工咖啡、推荐饮品、舒适空间与品牌故事。`,
    url: "/",
    images: ["/images/hero-bg1.webp"],
  },
};

export default function HomePage() {
  const swiperItems = menu.flatMap((category) =>
    category.items.filter((item) => item.inSwiper),
  );

  return (
    <div className="mx-auto  max-w-7xl space-y-2 mb-20">
      <Hero
        src={"/images/hero-bg1.webp"}
        alt={"质朴木桌上的手工咖啡与咖啡豆"}
        title={"一杯好咖啡，一段慢时光"}
        desc={
          "在 Mont Kiara 的城市日常里，精选咖啡豆，用心冲泡每一杯。"
        }
      />
      <h2 className="w-full p-2 text-center text-4xl font-bold lg:py-6 lg:text-6xl">
        推荐饮品
      </h2>
      <HeroSlider items={swiperItems} />

      <ImageLinkSection
        href="/about#story"
        src="/images/home/link-story.webp"
        alt="咖啡店故事入口图片"
        text="我们的故事"
      />
      <ImageLinkSection
        href="/about#space"
        src="/images/home/link-space.webp"
        alt="咖啡店空间环境入口图片"
        text="我们的环境"
      />
      <ImageLinkSection
        href="/about#team"
        src="/images/home/link-team.webp"
        alt="咖啡店团队入口图片"
        text="我们的团队"
      />
    </div>
  );
}
