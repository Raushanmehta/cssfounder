export interface LinkItem {
  name: string;
  href: string;
}

export interface ButtonItem {
  label: string;
  href: string;
  icon?: string;
}

export interface ImageData {
  src: string;
  alt: string;
}

// ---------------- NAVBAR ----------------
export interface NavbarData {
  logo: ImageData;
  navLinks: LinkItem[];
  pages: {
    name: string;
    links: LinkItem[];
  };
  contact: LinkItem;
  phone: {
    label: string;
    number: string;
    href: string;
  };
  donate: ButtonItem;
}

// ---------------- HERO SECTION ----------------
export interface HeroImpactItem {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: "green" | "orange";
}

export interface HeroData {
  backgroundImage: string;
  backgroundImageAlt: string;
  badge: {
    text: string;
    icon: string;
  };
  title: {
    line1: string;
    highlight: string;
    line2: string;
    heartSymbol: string;
  };
  description: string;
  primaryButton: ButtonItem;
  secondaryButton: ButtonItem;
  impactItems: HeroImpactItem[];
}

// ---------------- HELPING SECTION ----------------
export interface HelpingFeature {
  id: number;
  icon: string;
  title: string;
  text: string;
  orange?: boolean;
}

export interface HelpingData {
  topImage: ImageData;
  donationBadge: {
    textLine1: string;
    textHighlight: string;
    textLine2: string;
    icon: string;
  };
  mainImage: ImageData;
  bottomImage: ImageData;
  eyebrow: {
    text: string;
    icon: string;
  };
  title: {
    line1: string;
    highlight: string;
    line2: string;
  };
  description: string;
  features: HelpingFeature[];
  bulletPoints: string[];
  button: ButtonItem;
  phone: {
    label: string;
    number: string;
    href: string;
  };
}

// ---------------- SERVICES SECTION ----------------
export interface ServiceCardItem {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  icon: string;
  iconBgColor: string;
  buttonTextColor: string;
  href: string;
}

export interface ServicesData {
  tagline: string;
  taglineIcon: string;
  title: {
    prefix: string;
    highlight: string;
  };
  description: string;
  readMoreLabel: string;
  items: ServiceCardItem[];
}

// ---------------- WHY CHOOSE US ----------------
export interface WhyChooseFeature {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  borderAccent: string;
  arrowBg: string;
  arrowColor: string;
}

export interface WhyChooseUsData {
  subtitle: string;
  subtitleIcon: string;
  title: {
    prefix: string;
    highlight: string;
  };
  description: string;
  features: WhyChooseFeature[];
  image: ImageData;
  overlay: {
    icon: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
  };
}

// ---------------- STATS SECTION ----------------
export interface StatItem {
  icon: string;
  value: string;
  label: string;
}

export interface StatsData {
  backgroundImage: string;
  items: StatItem[];
}

// ---------------- TESTIMONIALS SECTION ----------------
export interface TestimonialItem {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  highlighted?: boolean;
}

export interface TestimonialsData {
  subtitle: string;
  subtitleIcon: string;
  title: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  description: string;
  items: TestimonialItem[];
}

// ---------------- CTA BANNER ----------------
export interface CtaVolunteerData {
  icon: string;
  subtitle: string;
  title: string;
  button: ButtonItem;
  backgroundImage: string;
}

export interface CtaVideoData {
  backgroundImage: string;
  videoUrl: string;
}

export interface CtaDonationData {
  icon: string;
  subtitle: string;
  title: string;
  button: ButtonItem;
  backgroundImage: string;
}

export interface CtaData {
  volunteer: CtaVolunteerData;
  video: CtaVideoData;
  donation: CtaDonationData;
}

// ---------------- BLOG SECTION ----------------
export interface BlogPost {
  id: number;
  category: string;
  categoryBg: string;
  imageSrc: string;
  date: string;
  title: string;
  description: string;
  href: string;
}

export interface BlogData {
  subtitle: string;
  subtitleIcon: string;
  title: {
    prefix: string;
    highlight: string;
  };
  description: string;
  readMoreLabel: string;
  viewAll: ButtonItem;
  posts: BlogPost[];
}

// ---------------- FOOTER ----------------
export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface FooterData {
  backgroundImage: string;
  newsletter: {
    titleLine1: string;
    titleLine2: string;
    placeholder: string;
    button: string;
  };
  hotline: {
    label: string;
    number: string;
    href: string;
  };
  emailContact: {
    label: string;
    email: string;
    href: string;
  };
  company: {
    name: string;
    tagline: string;
    description: string;
  };
  socialLinks: SocialLink[];
  quickLinks: {
    title: string;
    items: LinkItem[];
  };
  services: {
    title: string;
    items: LinkItem[];
  };
  contact: {
    title: string;
    address: string;
    phone: string;
    phoneHref: string;
    email: string;
    emailHref: string;
  };
  copyright: {
    year: number;
    companyName: string;
    rights: string;
  };
  legalLinks: LinkItem[];
}

// ---------------- MASTER HOME DATA ----------------
export interface HomeData {
  navbar: NavbarData;
  hero: HeroData;
  helping: HelpingData;
  services: ServicesData;
  whyChooseUs: WhyChooseUsData;
  stats: StatsData;
  testimonials: TestimonialsData;
  cta: CtaData;
  blog: BlogData;
  footer: FooterData;
}
