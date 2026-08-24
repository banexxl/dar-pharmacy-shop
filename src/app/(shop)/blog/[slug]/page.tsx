import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import { getBlogBySlug, getRelatedBlogs, getAllBlogs } from '@/services/blogs';
import { BlogDetailClient } from './blog-detail-client';

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: 'Blog post nije pronađen | Apoteka DAR',
    };
  }

  const url = `https://apoteka-dar.rs/blog/${blog.slug}`;

  return {
    title: `${blog.title} | Blog | Apoteka DAR`,
    description: blog.excerpt,

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url,
      type: 'article',
      images: blog.cover_image ? [{ url: blog.cover_image }] : [],
    },

    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
      images: blog.cover_image ? [blog.cover_image] : [],
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

  // Convert markdown content to HTML
  const blogWithHtmlContent = {
    ...blog,
    content: await marked(blog.content),
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    description: blog.excerpt,
    image: blog.cover_image ? [blog.cover_image] : [],
    datePublished: blog.published_at,
    dateModified: blog.updated_at,
    author: {
      '@type': 'Organization',
      name: 'Apoteka DAR',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Apoteka DAR',
      logo: {
        '@type': 'ImageObject',
        url: 'https://apoteka-dar.rs/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://apoteka-dar.rs/blog/${blog.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <BlogDetailClient
        blog={JSON.parse(JSON.stringify(blogWithHtmlContent))}
        relatedBlogs={JSON.parse(JSON.stringify(relatedBlogs))}
      />
    </>
  );
}
