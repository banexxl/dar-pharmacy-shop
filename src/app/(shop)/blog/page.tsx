import type { Metadata } from 'next';
import { getAllBlogs } from '@/services/blogs';
import { BlogPageClient } from './blog-page-client';

export const metadata: Metadata = {
  title: 'Blog | Apoteka DAR',
  description:
    'Pročitajte najnovije savete o zdravlju, lepoti, ishrani i prirodnim preparatima na blogu Apoteke DAR.',
  openGraph: {
    url: 'https://www.apoteka-dar.rs/blog',
  },
};

export const revalidate = 60;

export default async function BlogPage() {
  const blogs = await getAllBlogs();

  return <BlogPageClient blogs={JSON.parse(JSON.stringify(blogs))} />;
}
