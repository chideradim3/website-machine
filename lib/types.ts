export interface Service {
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  name: string;
  quote: string;
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
  faq: FAQItem[];
  stats: Stat[];
}
