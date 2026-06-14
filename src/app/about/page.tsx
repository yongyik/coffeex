import AboutSection from "@/components/about/AboutSection";
import Banner from "@/components/about/Banner";
import ImageGallery from "@/components/about/ImageGallery";
import SectionNav from "@/components/about/SectionNav";
import TeamMember from "@/components/about/TeamMember";

export default function AboutPage() {
  const members = [
    {
      src: "/images/about/team-shopkeeper.webp",
      alt: "团队成员 阿文 - 店主",
      name: "阿文 - 店主",
      desc: "热爱旅行与探索，他走过世界各地的咖啡馆，把一路上的灵感带回到这座城市。开这家店，是想创造一个“让生活慢下来”的空间，也希望咖啡能成为人与人之间的桥梁。",
    },
    {
      src: "/images/about/team-barista1.webp",
      alt: "团队成员 小夏 - 咖啡师",
      name: "小夏 - 咖啡师",
      desc: "热爱旅行与探索，他走过世界各地的咖啡馆，把一路上的灵感带回到这座城市。开这家店，是想创造一个“让生活慢下来”的空间，也希望咖啡能成为人与人之间的桥梁。",
    },
    {
      src: "/images/about/team-barista2.webp",
      alt: "团队成员 阿杰 - 咖啡师",
      name: "阿杰 - 咖啡师",
      desc: "痴迷于手冲，对咖啡风味的探索近乎执着。他最喜欢和客人分享不同产区的豆子故事，把一杯咖啡变成一场小型的“味觉旅行”。",
    },
  ];

  return (
    <div className="mx-auto w-full text-amber-100 max-w-7xl bg-black/20">
      <Banner
        title="一个温暖小屋"
        src="/images/about/header.webp"
        alt="一个手拿着咖啡豆"
      />

      <SectionNav
        links={[
          { href: "#story", label: "我们的故事" },
          { href: "#space", label: "空间氛围" },
          { href: "#team", label: "团队介绍" },
        ]}
      />

      <div className="lg:px-66">
        <AboutSection
          id="story"
          title="我们的故事"
          subtitle="起点 · 一杯咖啡的启发"
          paragraphs={[
            "一切从一杯咖啡开始。",
            "在一次旅行中，我们偶然走进了一家小咖啡馆。咖啡入口的那一瞬间，不只是惊喜的香气与层次，更像是生活被轻轻放慢了一拍。那份宁静与温暖，让我们萌生了一个念头：能不能把这样的体验带回自己的城市？",
            "于是，一个小小的梦想在心里发芽：开一家属于自己的咖啡店，用咖啡分享片刻的安宁与美好。",
          ]}
          image={{
            src: "/images/about/coffee-beans-in-hand.webp",
            alt: "手握新鲜烘焙咖啡豆的特写",
          }}
        />

        <AboutSection
          subtitle="坚持 · 学习与尝试"
          paragraphs={[
            "从梦想落地到真正开店，过程并不轻松。",
            "我们花了很长时间去学习咖啡知识，反复尝试不同产区的豆子，研究烘焙曲线，只为找到那一杯最合适的风味。也经历过无数失败：焦掉的咖啡豆、打翻的牛奶、歪掉的拉花……",
            "但每一次尝试都让我们离目标更近一步。正是这份坚持，让我们相信：一杯用心制作的咖啡，能够打动人心。",
          ]}
          image={{
            src: "/images/about/barista-pouring-coffee.webp",
            alt: "咖啡师专注地制作一杯咖啡",
          }}
        />

        <AboutSection
          subtitle="空间 · 一间属于大家的小店"
          paragraphs={[
            "我们希望这家店，不仅仅是一家咖啡馆。",
            "它是“城市里的客厅”：有人独自带着书在这里静静坐下；有人和朋友在此分享笑声；也有人把这里当作远离喧嚣的小角落。",
            "我们在空间里加入了木质的温暖、绿植的清新和柔和的光线，让它既能承载安静的独处，也能成为热闹的聚会场所。",
            "这里的每一张桌椅、每一盏灯，都是为了让你感到自在。",
          ]}
          image={{
            src: "/images/about/green-coffee-shop-interior.webp",
            alt: "绿植环绕的咖啡店空间",
          }}
        />

        <AboutSection
          subtitle="未来 · 一杯咖啡的连结"
          paragraphs={[
            "对我们来说，咖啡不只是提神饮品，它是一种人与人之间的连结。",
            "我们希望这家咖啡店，能成为生活的一部分：在上班前的清晨带来力量，在午后时光给予陪伴，在社区里成为大家彼此相遇的理由。",
            "未来，我们会继续尝试新的风味、举办更多交流活动，把咖啡当作桥梁，让不同的故事在这里交汇。",
            "因为我们始终相信，一杯好咖啡，可以带来无限可能。",
          ]}
          image={{
            src: "/images/about/coffee-shop-team.webp",
            alt: "我们的咖啡店团队合照",
          }}
        />

        <ImageGallery
          id="space"
          title="空间氛围"
          images={[
            { src: "/images/about/environment-1.webp", alt: "环境照片 1" },
            { src: "/images/about/environment-2.webp", alt: "环境照片 2" },
            { src: "/images/about/environment-3.webp", alt: "环境照片 3" },
            { src: "/images/about/environment-4.webp", alt: "环境照片 4" },
            { src: "/images/about/environment-5.webp", alt: "环境照片 5" },
            { src: "/images/about/environment-6.webp", alt: "环境照片 6" },
          ]}
        />

        <TeamMember id="team" title="团队介绍" members={members} />
      </div>
    </div>
  );
}
