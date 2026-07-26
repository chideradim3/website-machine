export interface Service {
  title: string;
  description: string;
  image: string;
  offer?: string;
}

export interface Testimonial {
  name: string;
  quote: string;
}

export interface Review {
  name: string;
  text: string;
  rating?: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Stat {
  number: string;
  text: string;
}

export interface SiteData {
  type?: "medspa";
  name: string;
  tagline: string;
  description: string;
  logo: string;
  hero: {
    title: string;
    subtitle: string;
    image: string;
    ctaText: string;
  };
  colors: {
    primary: string;
    accent: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
    ctaText: string;
  };
  services: Service[];
  benefits: string[];
  beforeAfterImages: string[];
  testimonials: Testimonial[];
  reviews: Review[];
  faq: FAQItem[];
  stats: Stat[];
}

export interface HairSalonFonts {
  heading: string;
  body: string;
}

export interface ServiceCategoryItem {
  name: string;
  price: string;
}

export interface ServiceCategory {
  category: string;
  items: ServiceCategoryItem[];
}

export interface Stylist {
  name: string;
  title?: string;
  photo: string;
  bio: string;
  bookingUrl?: string;
}

export interface SalonHours {
  day: string;
  time: string;
}

export interface HairSalonContact {
  phone: string;
  email: string;
  address: string;
  hours: SalonHours[];
}

export interface HairSalonData {
  type: "hairsalon";
  name: string;
  tagline: string;
  description: string;
  logo: string;
  bookingUrl: string;
  fonts: HairSalonFonts;
  hero: {
    title: string;
    subtitle: string;
    heroImage: string;
    heroVideo: string;
    ctaText: string;
  };
  colors: {
    primary: string;
    accent: string;
  };
  gallery: { image: string; label: string }[];
  serviceCategories: ServiceCategory[];
  stylists: Stylist[];
  reviews: Review[];
  contact: HairSalonContact;
}

export type AnySiteData = SiteData | HairSalonData;
