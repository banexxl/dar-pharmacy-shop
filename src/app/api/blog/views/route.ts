import { NextRequest, NextResponse } from 'next/server';
import { incrementBlogViews } from '@/services/blogs';
import { logAction } from '@/services/logger';

export async function POST(request: NextRequest) {
  const { slug } = await request.json();

  if (!slug || typeof slug !== 'string') {
    logAction({ action: 'blog.view', success: false, method: 'POST', path: '/api/blog/views', error_message: 'Slug is required' });
    return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
  }

  await incrementBlogViews(slug);
  logAction({ action: 'blog.view', success: true, method: 'POST', path: '/api/blog/views', metadata: { slug } });

  return NextResponse.json({ success: true });
}
