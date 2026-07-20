export interface MenuItem {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  photo: string;
  price: number;
  inSwiper: boolean;
}

export interface MenuCategory {
  categoryKey: string;
  category: string;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    categoryKey: "hot",
    category: "热饮",
    items: [
      {
        id: "hot-americano",
        name: "美式咖啡",
        description: "经典意式浓缩加水稀释，口感清爽顺滑。",
        fullDescription:
          "使用高品质阿拉比卡咖啡豆制作，稀释后的美式咖啡保留原豆风味，酸度适中，适合清晨或提神时饮用。",
        photo: "/images/menu/drinks-americano.webp",
        price: 9,
        inSwiper: true,
      },
      {
        id: "hot-latte",
        name: "拿铁",
        description: "柔和咖啡香与牛奶完美融合，适合喜欢奶香的你。",
        fullDescription:
          "选用浓缩咖啡与蒸汽牛奶调制，口感顺滑，奶香醇厚，适合日常饮用或轻松午后时光享受。",
        photo: "/images/menu/drinks-latte.webp",
        price: 8,
        inSwiper: false,
      },
      {
        id: "hot-mocha",
        name: "摩卡",
        description: "浓郁巧克力与咖啡融合，口感顺滑，甜而不腻。",
        fullDescription:
          "巧克力的浓香与咖啡的微苦交融，加入蒸汽牛奶后口感丝滑，适合喜欢甜味咖啡的顾客。",
        photo: "/images/menu/drinks-mocha.webp",
        price: 9,
        inSwiper: false,
      },
    ],
  },

  {
    categoryKey: "cold",
    category: "冷饮",

    items: [
      {
        id: "iced-americano",
        name: "冰美式",
        description: "冰镇浓缩咖啡，口感清爽，适合夏日提神。",
        fullDescription:
          "浓缩咖啡冷却后加入冰块，保留咖啡原香，口感清爽，适合夏天或需要提神的时刻。",
        photo: "/images/menu/drinks-iced-americano.webp",
        price: 11,
        inSwiper: false,
      },
      {
        id: "iced-latte",
        name: "冰拿铁",
        description: "浓缩咖啡与冰牛奶融合，冰凉香浓。",
        fullDescription:
          "冷却后的浓缩咖啡加入冰牛奶，入口冰凉顺滑，奶香与咖啡香气平衡，清爽怡人。",
        photo: "/images/menu/drinks-iced-latte.webp",
        price: 12,
        inSwiper: false,
      },
      {
        id: "iced-mocha",
        name: "冰摩卡",
        description: "冰摩卡，巧克力与咖啡的冰爽碰撞。",
        fullDescription:
          "冰镇摩卡，巧克力香气浓郁，咖啡口感顺滑，冰块带来清凉口感，是夏日甜品咖啡首选。",
        photo: "/images/menu/drinks-iced-mocha.webp",
        price: 12,
        inSwiper: true,
      },
    ],
  },

  {
    categoryKey: "special-drinks",
    category: "特调饮品",

    items: [
      {
        id: "matcha-latte",
        name: "抹茶拿铁",
        description: "精选抹茶粉与牛奶调制，茶香浓郁，口感顺滑。",
        fullDescription:
          "抹茶粉与蒸汽牛奶混合调制而成，茶香浓郁顺滑，口感均衡，带微微甘苦与奶香，非常适合喜欢茶味饮品的顾客。",
        photo: "/images/menu/drinks-matcha-latte.webp",
        price: 13,
        inSwiper: true,
      },
      {
        id: "red-tea-latte",
        name: "红茶拿铁",
        description: "红茶香气与牛奶完美结合，温暖醇厚。",
        fullDescription:
          "精选高品质红茶茶叶，加入蒸汽牛奶，茶香浓郁，口感顺滑，适合喜欢温润饮品的人。",
        photo: "/images/menu/drinks-red-tea-latte.webp",
        price: 11,
        inSwiper: false,
      },
    ],
  },

  {
    categoryKey: "dessert",
    category: "甜品",

    items: [
      {
        id: "blueberry-cheesecake",
        name: "蓝莓乳酪蛋糕",
        description: "丝滑乳酪搭配新鲜蓝莓，口感细腻清新。",
        fullDescription:
          "乳酪蛋糕细腻丝滑，搭配新鲜蓝莓，酸甜适中，口感层次丰富，视觉与味觉双重享受。",
        photo: "/images/menu/dessert-blueberry-cheesecake.webp",
        price: 9,
        inSwiper: false,
      },
      {
        id: "chocolate-brownie",
        name: "巧克力布朗尼",
        description: "浓郁巧克力香，外脆内软，甜而不腻。",
        fullDescription:
          "布朗尼外层微脆，内部湿润浓郁，巧克力香气扑鼻，甜度适中，适合巧克力爱好者。",
        photo: "/images/menu/dessert-chocolate-brownie.webp",
        price: 8,
        inSwiper: false,
      },
      {
        id: "madeleine",
        name: "玛德琳小蛋糕",
        description: "法式经典小点心，口感松软，香气扑鼻。",
        fullDescription:
          "法式玛德琳蛋糕，口感松软，带有淡淡黄油香气，适合作为下午茶点心。",
        photo: "/images/menu/dessert-madeleine.webp",
        price: 9,
        inSwiper: false,
      },
    ],
  },
];
