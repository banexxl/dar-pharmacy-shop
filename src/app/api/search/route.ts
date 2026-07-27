import { NextRequest, NextResponse } from 'next/server';
import { searchProducts } from '@/lib/services/products';

export async function POST(request: NextRequest) {
  const body = await request.text();

  if (!body || body.trim().length === 0) {
    return NextResponse.json({ error: 'Search term is required' }, { status: 400 });
  }

  const searchedProducts = await searchProducts(body);

  if (searchedProducts.length > 0) {
    return NextResponse.json({ message: 'Artikli pronađeni!', data: searchedProducts });
  }

  return NextResponse.json({ error: 'Za datu pretragu nema pronađenih rezultata' }, { status: 404 });
}
