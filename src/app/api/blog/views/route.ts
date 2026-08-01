import { NextRequest, NextResponse } from 'next/server';
import { incrementBlogViews } from '@/services/blogs';

export async function POST(request: NextRequest) {
  const { slug } = await request.json();

  if (!slug || typeof slug !== 'string') {
    return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
  }

  await incrementBlogViews(slug);

  return NextResponse.json({ success: true });
}
