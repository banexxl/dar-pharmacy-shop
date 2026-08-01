import { BlogPost, BlogCategory } from '@/interfaces/blog/blog.interface';
import { createServiceRoleClient } from './supabase/service-role';

const supabase = createServiceRoleClient();

// === Service Functions ===

export async function getAllBlogs(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blogs' as any)
    .select('*')
    .eq('is_published', true)
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching blogs:', error.message);
    return [];
  }

  return (data as any[]) || [];
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single();

  if (error) {
    console.error('Error fetching blog by slug:', error.message);
    return null;
  }

  return (data as BlogPost) || null;
}

export async function getBlogsByCategory(
  category: BlogCategory
): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('category', category)
    .eq('is_published', true)
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching blogs by category:', error.message);
    return [];
  }

  return (data as BlogPost[]) || [];
}

export async function getRelatedBlogs(
  currentSlug: string,
  category: BlogCategory,
  limit: number = 3
): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blogs' as any)
    .select('*')
    .eq('category', category)
    .eq('is_published', true)
    .neq('slug', currentSlug)
    .order('published_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching related blogs:', error.message);
    return [];
  }

  return (data as any[]) || [];
}

export async function getFeaturedBlogs(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blogs' as any)
    .select('*')
    .eq('is_published', true)
    .eq('featured', true)
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching featured blogs:', error.message);
    return [];
  }

  return (data as any[]) || [];
}

export async function incrementBlogViews(slug: string): Promise<void> {
  const { data: blog } = await supabase
    .from('blogs' as any)
    .select('views_count')
    .eq('slug', slug)
    .single();

  if (!blog) return;

  const { error } = await supabase
    .from('blogs' as any)
    .update({ views_count: ((blog as any).views_count || 0) + 1 })
    .eq('slug', slug);

  if (error) {
    console.error('Error incrementing blog views:', error.message);
  }
}
