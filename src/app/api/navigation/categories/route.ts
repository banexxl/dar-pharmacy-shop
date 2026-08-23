import { NextResponse } from 'next/server';
import { buildAccordionPanels } from '@/services/navigation';

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  const panels = await buildAccordionPanels();
  return NextResponse.json(panels);
}
