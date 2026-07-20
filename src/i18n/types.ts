export type Locale = "zh" | "en";

export type PageKey = "home" | "menu" | "about" | "contact" | "privacy";

export type MenuCategoryKey = "hot" | "iced" | "nonCoffee" | "dessert";

export type MenuTagKey = "bestseller" | "new" | "vegetarian";

export type EnquiryTypeKey =
  | "table"
  | "event"
  | "menu"
  | "business"
  | "other";

export interface Dictionary {
  header: {
    nav: Record<"home" | "about" | "menu" | "contact", string>;
    whatsapp: string;
    openMenu: string;
    closeMenu: string;
    mainNavigation: string;
    mobileNavigation: string;
    languageSwitcher: string;
  };
  footer: {
    navigation: string;
    nav: Record<"home" | "about" | "menu" | "contact", string>;
    otherPages: string;
    contactUs: string;
    privacy: string;
    phone: string;
    email: string;
    address: string;
    businessHours: string;
    whatsapp: string;
    instagram: string;
    copyright: string;
  };
  common: {
    skipToContent: string;
    price: string;
    learnMore: string;
    close: string;
    collapse: string;
    tags: string;
    options: string;
    allergens: string;
  };
  seo: Record<PageKey, { title: string; description: string }>;
  home: {
    heroTitle: string;
    heroDescription: string;
    heroAlt: string;
    viewMenu: string;
    messageUs: string;
    recommended: string;
    storyLink: string;
    storyAlt: string;
    spaceLink: string;
    spaceAlt: string;
    teamLink: string;
    teamAlt: string;
    carousel: {
      label: string;
      slideLabel: string;
      paginationBullet: string;
      pause: string;
      resume: string;
      viewItem: string;
    };
  };
  menu: {
    pageTitle: string;
    categoryTitle: string;
    categories: Record<MenuCategoryKey, string>;
    tags: Record<MenuTagKey, string>;
    currentCategory: string;
  };
  about: {
    bannerTitle: string;
    bannerAlt: string;
    sectionNavigation: string;
    nav: { story: string; space: string; team: string };
    sections: Array<{
      title?: string;
      subtitle: string;
      paragraphs: string[];
      imageAlt: string;
    }>;
    galleryTitle: string;
    galleryAlts: string[];
    teamTitle: string;
    members: Array<{ name: string; alt: string; description: string }>;
  };
  contact: {
    bannerTitle: string;
    bannerAlt: string;
    eyebrow: string;
    introTitle: string;
    intro: string;
    phoneTitle: string;
    callUs: string;
    whatsappTitle: string;
    messageWhatsapp: string;
    emailTitle: string;
    addressTitle: string;
    hoursTitle: string;
    instagramTitle: string;
    formTitle: string;
    formNotice: string;
    privacyLink: string;
    fields: {
      name: string;
      namePlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      enquiryType: string;
      selectEnquiryType: string;
      preferredDate: string;
      guests: string;
      guestsPlaceholder: string;
      message: string;
      messagePlaceholder: string;
    };
    enquiryTypes: Record<EnquiryTypeKey, string>;
    validation: {
      name: string;
      phone: string;
      enquiryType: string;
      message: string;
    };
    submit: string;
    locationTitle: string;
    locationDescription: string;
    mapTitle: string;
    notProvided: string;
    whatsappGreeting: string;
    whatsappFields: {
      name: string;
      phone: string;
      enquiryType: string;
      preferredDate: string;
      guests: string;
      message: string;
    };
  };
  privacy: {
    badge: string;
    title: string;
    updated: string;
    sections: Array<{
      title: string;
      paragraphs: string[];
      bullets?: string[];
    }>;
    contactTitle: string;
    contactIntro: string;
    fictionalNotice: string;
  };
  notFound: {
    title: string;
    description: string;
    home: string;
    menu: string;
  };
}
