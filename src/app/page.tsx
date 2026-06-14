import ImageLinkSection from "@/components/home/ImageLinkSection";
import Hero from "@/components/home/HeroSection";
import HeroSlider from "@/components/swiper/HeroSlider";
import { menu } from "@/data/menu";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "首页",
  description:
    "欢迎来到 MyCoffee，一家位于 Kuala Lumpur 的温暖咖啡店。探索我们的推荐饮品、咖啡空间、品牌故事与团队介绍。",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: `首页 | ${siteConfig.name}`,
    description: "探索 MyCoffee 的手工咖啡、推荐饮品、舒适空间与品牌故事。",
    url: "/",
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
        alt={"hero"}
        title={"手工烘焙 · 一杯温暖你的咖啡"}
        desc={
          "「我们是一家位于市中心的小咖啡馆，精选咖啡豆，用心冲泡每一杯。」"
        }
      />
      <p className="  w-full text-center text-4xl font-bold p-2 lg:text-6xl lg:py-6">
        推荐饮品
      </p>
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
