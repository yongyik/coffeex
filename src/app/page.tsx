import ImageLinkSection from "@/components/home/ImageLinkSection";
import Hero from "@/components/home/HeroSection";
import HeroSlider from "@/components/swiper/HeroSlider";
import { menu } from "@/data/menu";

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

      <HeroSlider items={swiperItems} />

      <ImageLinkSection
        href="/about#story"
        src="/images/home/link-story.webp"
        alt="一个人在拉花"
        text="我们的故事"
      />
      <ImageLinkSection
        href="/about#space"
        src="/images/home/link-space.webp"
        alt="一个人在拉花"
        text="我们的环境"
      />
      <ImageLinkSection
        href="/about#team"
        src="/images/home/link-team.webp"
        alt="一个人在拉花"
        text="我们的团队"
      />
    </div>
  );
}
