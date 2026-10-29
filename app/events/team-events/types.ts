export interface EventEdition {
  year: string;
  photos: string[];
}

export interface TeamEvent {
  slug: string;
  title: string;
  category: string;
  description: string;
  heroImage: string;
  editions: EventEdition[];
}
