import type {
  Locale,
  MenuCategoryKey,
  MenuTagKey,
} from "@/i18n/types";

type LocalizedText = Record<Locale, string>;
type LocalizedList = Record<Locale, string[]>;

export interface MenuItem {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  fullDescription: LocalizedText;
  photo: string;
  price: number;
  inSwiper: boolean;
  tags?: MenuTagKey[];
  options?: LocalizedList;
  allergens?: LocalizedList;
}

export interface MenuCategory {
  categoryKey: MenuCategoryKey;
  items: MenuItem[];
}

export interface LocalizedMenuItem {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  photo: string;
  price: number;
  inSwiper: boolean;
  tags: MenuTagKey[];
  options: string[];
  allergens: string[];
}

export interface LocalizedMenuCategory {
  categoryKey: MenuCategoryKey;
  items: LocalizedMenuItem[];
}

export const menu: MenuCategory[] = [
  {
    categoryKey: "hot",
    items: [
      {
        id: "hot-americano",
        name: { zh: "美式咖啡", en: "Americano" },
        description: {
          zh: "经典意式浓缩加水，口感清爽顺滑。",
          en: "Espresso lengthened with hot water for a clean, smooth cup.",
        },
        fullDescription: {
          zh: "使用阿拉比卡咖啡豆制作，保留清晰香气与适中酸度，适合清晨或需要提神的时刻。",
          en: "Made with Arabica beans for a clear aroma and balanced acidity, ideal for an easy morning or a focused afternoon.",
        },
        photo: "/images/menu/drinks-americano.webp",
        price: 9,
        inSwiper: true,
        tags: ["bestseller"],
        options: {
          zh: ["标准浓度", "额外一份浓缩"],
          en: ["Regular strength", "Extra espresso shot"],
        },
      },
      {
        id: "hot-latte",
        name: { zh: "拿铁", en: "Caffè Latte" },
        description: {
          zh: "柔和咖啡香与蒸汽牛奶融合，奶香顺滑。",
          en: "Espresso and steamed milk balanced into a gentle, silky cup.",
        },
        fullDescription: {
          zh: "浓缩咖啡与细腻蒸汽牛奶调制，咖啡香和奶香平衡，适合轻松的午后。",
          en: "A measured espresso base finished with textured steamed milk for a balanced and comforting everyday drink.",
        },
        photo: "/images/menu/drinks-latte.webp",
        price: 8,
        inSwiper: false,
        tags: ["vegetarian"],
        options: { zh: ["鲜奶", "燕麦奶"], en: ["Fresh milk", "Oat milk"] },
        allergens: { zh: ["牛奶"], en: ["Milk"] },
      },
      {
        id: "hot-mocha",
        name: { zh: "摩卡", en: "Caffè Mocha" },
        description: {
          zh: "巧克力与咖啡交融，香浓顺滑，甜而不腻。",
          en: "Espresso and chocolate brought together with smooth steamed milk.",
        },
        fullDescription: {
          zh: "巧克力的浓香与咖啡的微苦相互平衡，再以蒸汽牛奶带来柔滑口感。",
          en: "Rich chocolate softens the espresso's bittersweet edge, while steamed milk gives the drink a smooth finish.",
        },
        photo: "/images/menu/drinks-mocha.webp",
        price: 9,
        inSwiper: false,
        options: { zh: ["鲜奶", "燕麦奶"], en: ["Fresh milk", "Oat milk"] },
        allergens: { zh: ["牛奶"], en: ["Milk"] },
      },
    ],
  },
  {
    categoryKey: "iced",
    items: [
      {
        id: "iced-americano",
        name: { zh: "冰美式", en: "Iced Americano" },
        description: {
          zh: "冰镇浓缩咖啡，清爽直接，适合炎热午后。",
          en: "Chilled espresso over ice for a crisp and refreshing finish.",
        },
        fullDescription: {
          zh: "浓缩咖啡加入冰水，保留咖啡香气与干净余韵，是炎热天气里的清爽选择。",
          en: "Espresso poured over cold water and ice, preserving its aroma and clean finish for warm Kuala Lumpur afternoons.",
        },
        photo: "/images/menu/drinks-iced-americano.webp",
        price: 11,
        inSwiper: false,
        tags: ["new"],
      },
      {
        id: "iced-latte",
        name: { zh: "冰拿铁", en: "Iced Latte" },
        description: {
          zh: "浓缩咖啡与冰牛奶融合，冰凉香浓。",
          en: "Espresso, cold milk, and ice in a creamy, refreshing balance.",
        },
        fullDescription: {
          zh: "浓缩咖啡加入冰牛奶，入口清凉顺滑，奶香与咖啡香气保持平衡。",
          en: "A chilled combination of espresso and milk with a smooth texture and an even balance of coffee and dairy sweetness.",
        },
        photo: "/images/menu/drinks-iced-latte.webp",
        price: 12,
        inSwiper: false,
        tags: ["vegetarian"],
        options: { zh: ["鲜奶", "燕麦奶"], en: ["Fresh milk", "Oat milk"] },
        allergens: { zh: ["牛奶"], en: ["Milk"] },
      },
      {
        id: "iced-mocha",
        name: { zh: "冰摩卡", en: "Iced Mocha" },
        description: {
          zh: "巧克力、咖啡与冰牛奶的清凉组合。",
          en: "A chilled blend of espresso, chocolate, milk, and ice.",
        },
        fullDescription: {
          zh: "冰镇摩卡带有浓郁巧克力香与顺滑咖啡口感，是偏甜饮品爱好者的清凉选择。",
          en: "A cool, chocolate-forward mocha with a smooth espresso finish, made for anyone who prefers a sweeter coffee.",
        },
        photo: "/images/menu/drinks-iced-mocha.webp",
        price: 12,
        inSwiper: true,
        tags: ["bestseller"],
        options: { zh: ["鲜奶", "燕麦奶"], en: ["Fresh milk", "Oat milk"] },
        allergens: { zh: ["牛奶"], en: ["Milk"] },
      },
    ],
  },
  {
    categoryKey: "nonCoffee",
    items: [
      {
        id: "matcha-latte",
        name: { zh: "抹茶拿铁", en: "Matcha Latte" },
        description: {
          zh: "精选抹茶与牛奶调制，茶香浓郁顺滑。",
          en: "Stone-ground matcha whisked with milk for a smooth, earthy cup.",
        },
        fullDescription: {
          zh: "抹茶与蒸汽牛奶调制，甘苦茶香和柔和奶香保持平衡。",
          en: "Matcha and steamed milk create a balanced drink with gentle bitterness, natural sweetness, and a creamy finish.",
        },
        photo: "/images/menu/drinks-matcha-latte.webp",
        price: 13,
        inSwiper: true,
        tags: ["bestseller", "vegetarian"],
        options: { zh: ["热饮", "冰饮", "燕麦奶"], en: ["Hot", "Iced", "Oat milk"] },
        allergens: { zh: ["牛奶"], en: ["Milk"] },
      },
      {
        id: "red-tea-latte",
        name: { zh: "红茶拿铁", en: "Black Tea Latte" },
        description: {
          zh: "红茶香气与牛奶结合，温润醇厚。",
          en: "Fragrant black tea softened with warm, creamy milk.",
        },
        fullDescription: {
          zh: "高品质红茶与蒸汽牛奶相融，茶香清晰，口感温润顺滑。",
          en: "Quality black tea is paired with steamed milk for a fragrant and softly rounded drink.",
        },
        photo: "/images/menu/drinks-red-tea-latte.webp",
        price: 11,
        inSwiper: false,
        tags: ["vegetarian"],
        options: { zh: ["热饮", "冰饮", "燕麦奶"], en: ["Hot", "Iced", "Oat milk"] },
        allergens: { zh: ["牛奶"], en: ["Milk"] },
      },
    ],
  },
  {
    categoryKey: "dessert",
    items: [
      {
        id: "blueberry-cheesecake",
        name: { zh: "蓝莓乳酪蛋糕", en: "Blueberry Cheesecake" },
        description: {
          zh: "丝滑乳酪搭配蓝莓，酸甜细腻。",
          en: "Silky cheesecake finished with bright, gently tart blueberries.",
        },
        fullDescription: {
          zh: "细腻乳酪蛋糕搭配蓝莓的清爽酸甜，适合与咖啡一起慢慢享用。",
          en: "Creamy cheesecake and fresh blueberry notes create a balanced dessert made to pair with coffee.",
        },
        photo: "/images/menu/dessert-blueberry-cheesecake.webp",
        price: 9,
        inSwiper: false,
        tags: ["vegetarian"],
        allergens: { zh: ["牛奶", "鸡蛋", "小麦"], en: ["Milk", "Eggs", "Wheat"] },
      },
      {
        id: "chocolate-brownie",
        name: { zh: "巧克力布朗尼", en: "Chocolate Brownie" },
        description: {
          zh: "浓郁巧克力香，外层微脆，内部柔软。",
          en: "Deep chocolate flavour with a lightly crisp top and soft centre.",
        },
        fullDescription: {
          zh: "布朗尼外层微脆、内部湿润，巧克力风味浓郁但不过甜。",
          en: "A lightly crisp top gives way to a moist centre with full chocolate flavour and measured sweetness.",
        },
        photo: "/images/menu/dessert-chocolate-brownie.webp",
        price: 8,
        inSwiper: false,
        tags: ["bestseller", "vegetarian"],
        allergens: { zh: ["牛奶", "鸡蛋", "小麦"], en: ["Milk", "Eggs", "Wheat"] },
      },
      {
        id: "madeleine",
        name: { zh: "玛德琳小蛋糕", en: "Madeleine" },
        description: {
          zh: "法式经典小点，口感松软，带淡淡黄油香。",
          en: "A soft French tea cake with a delicate buttery aroma.",
        },
        fullDescription: {
          zh: "松软玛德琳带有淡淡黄油香气，适合搭配咖啡或茶作为轻巧甜点。",
          en: "A tender, buttery French cake that makes a light companion to coffee or tea.",
        },
        photo: "/images/menu/dessert-madeleine.webp",
        price: 9,
        inSwiper: false,
        tags: ["vegetarian"],
        allergens: { zh: ["牛奶", "鸡蛋", "小麦"], en: ["Milk", "Eggs", "Wheat"] },
      },
    ],
  },
];

export function getLocalizedMenu(locale: Locale): LocalizedMenuCategory[] {
  return menu.map((category) => ({
    categoryKey: category.categoryKey,
    items: category.items.map((item) => ({
      id: item.id,
      name: item.name[locale],
      description: item.description[locale],
      fullDescription: item.fullDescription[locale],
      photo: item.photo,
      price: item.price,
      inSwiper: item.inSwiper,
      tags: item.tags ?? [],
      options: item.options?.[locale] ?? [],
      allergens: item.allergens?.[locale] ?? [],
    })),
  }));
}
