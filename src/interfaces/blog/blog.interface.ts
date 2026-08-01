export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string;
  author: string;
  category: BlogCategory;
  published_at: string;
  created_at: string;
  updated_at: string;
  is_published: boolean;
  reading_time_minutes: number;
  views_count: number;
  featured: boolean;
}

export type BlogCategory =
  | 'Zdravlje'
  | 'Lepota'
  | 'Ishrana'
  | 'Saveti'
  | 'Biljni preparati'
  | 'Aromaterapija'
  | 'Vitamini i suplementi'
  | 'Prirodna kozmetika';

export const BLOG_CATEGORIES: BlogCategory[] = [
  'Zdravlje',
  'Lepota',
  'Ishrana',
  'Saveti',
  'Biljni preparati',
  'Aromaterapija',
  'Vitamini i suplementi',
  'Prirodna kozmetika',
];
