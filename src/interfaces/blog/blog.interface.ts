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
  | 'zdravlje'
  | 'lepota'
  | 'ishrana'
  | 'saveti'
  | 'biljni_preparati'
  | 'aromaterapija'
  | 'vitamini_i_suplementi'
  | 'prirodna_kozmetika';

export const BLOG_CATEGORIES: BlogCategory[] = [
  'zdravlje',
  'lepota',
  'ishrana',
  'saveti',
  'biljni_preparati',
  'aromaterapija',
  'vitamini_i_suplementi',
  'prirodna_kozmetika',
];

export const BLOG_CATEGORY_LABELS: Record<BlogCategory, string> = {
  zdravlje: 'Zdravlje',
  lepota: 'Lepota',
  ishrana: 'Ishrana',
  saveti: 'Saveti',
  biljni_preparati: 'Biljni preparati',
  aromaterapija: 'Aromaterapija',
  vitamini_i_suplementi: 'Vitamini i suplementi',
  prirodna_kozmetika: 'Prirodna kozmetika',
};
