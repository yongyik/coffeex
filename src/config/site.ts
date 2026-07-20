export const siteConfig = {
  name: "Morning Oak Coffee",
  nameZh: "晨木咖啡",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://mycoffee-demo.vercel.app",

  description:
    "晨木咖啡是一家位于 Kuala Lumpur Mont Kiara 的温暖咖啡店，提供手工咖啡、特调饮品、甜品与舒适空间。",

  logo: "Morning Oak",
  tagline: "Good coffee, slow mornings.",
  taglineZh: "一杯好咖啡，一段慢时光。",

  phone: "+60 12-888 6620",
  whatsapp: "60128886620",
  email: "hello@morningoakcoffee.com",
  address: "18, Jalan Solaris 3, Mont Kiara, 50480 Kuala Lumpur, Malaysia",
  businessHours: [
    {
      day: "星期一 至 星期五",
      time: "8:00 AM - 8:00 PM",
    },
    {
      day: "星期六 至 星期日",
      time: "9:00 AM - 9:00 PM",
    },
  ],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/morningoakcoffee",
    tiktok: "",
  },
};
