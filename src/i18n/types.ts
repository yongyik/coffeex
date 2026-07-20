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
    carouselDescription: string;
    announcements: {
      heading: string;
      description: string;
      typeLabels: Record<"notice" | "new" | "holiday", string>;
    };
    businessInfo: {
      heading: string;
      today: string;
      location: string;
      whatsapp: string;
      wifi: string;
      parking: string;
    };
    exploreTitle: string;
    testimonials: {
      heading: string;
      description: string;
      ratingLabel: string;
      notice: string;
    };
    finalCta: {
      title: string;
      description: string;
      menu: string;
      visit: string;
      whatsapp: string;
    };
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
    pageDescription: string;
    categoryTitle: string;
    categories: Record<MenuCategoryKey, string>;
    tags: Record<MenuTagKey, string>;
    currentCategory: string;
    askAboutItem: string;
    itemInquiryMessage: string;
    notesTitle: string;
    notes: string[];
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
    valuesTitle: string;
    values: Array<{ title: string; description: string }>;
    teamTitle: string;
    favoriteLabel: string;
    members: Array<{
      name: string;
      role: string;
      alt: string;
      description: string;
      favorite: string;
    }>;
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
      phoneFormat: string;
      enquiryType: string;
      message: string;
    };
    submit: string;
    locationTitle: string;
    locationDescription: string;
    mapTitle: string;
    gettingHereTitle: string;
    gettingHere: string[];
    facilitiesTitle: string;
    facilities: string[];
    faqTitle: string;
    faqDescription: string;
    faqs: Array<{ question: string; answer: string }>;
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
