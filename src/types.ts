export type ThemeMode = 'dark' | 'light';
export type AccentTheme = ThemeMode; // compatibility alias

export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  badge: string;
  priceStarting: string;
  timeEstimate: string;
  warranty: string;
  category: string;
  iconName: string;
  options: {
    title: string;
    description: string;
    price: string;
  }[];
  processSteps: string[];
  techSpec: string;
  image: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  beforeImg: string;
  afterImg: string;
  splitTestImg?: string;
  timeSpent: string;
  coating: string;
  stats: string;
}

export interface ReelVideo {
  id: string;
  title: string;
  car: string;
  service: string;
  views: string;
  likes: number;
  duration: string;
  videoPoster: string;
  videoSrc: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  car: string;
  rating: number;
  date: string;
  text: string;
  avatar: string;
  verifiedMaps: boolean;
  serviceUsed: string;
}

export interface QuizSubmission {
  carClass: string;
  goal: string;
  carModel: string;
  phone: string;
  messenger: 'telegram' | 'viber' | 'whatsapp';
  discountCode: string;
  estimatedPrice: string;
}
