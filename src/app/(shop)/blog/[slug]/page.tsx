import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogBySlug, getRelatedBlogs, getAllBlogs } from '@/services/blogs';
import { BlogDetailClient } from './blog-detail-client';

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return { title: 'Blog post nije pronađen' };
  }

  return {
    title: `${blog.title} | Blog | Apoteka DAR`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `https://www.apoteka-dar.rs/blog/${blog.slug}`,
      images: [{ url: blog.cover_image }],
    },
  };
}

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export const revalidate = 60;

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = await getRelatedBlogs(slug, blog.category, 3);

  return (
    <BlogDetailClient
      blog={JSON.parse(JSON.stringify(blog))}
      relatedBlogs={JSON.parse(JSON.stringify(relatedBlogs))}
    />
  );
}
