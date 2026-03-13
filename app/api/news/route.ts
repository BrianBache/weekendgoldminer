import { NextResponse } from 'next/server';
import { getNews } from '@/lib/news';

export const dynamic = 'force-dynamic';

export async function GET() {
  const data = getNews();
  return NextResponse.json(data);
}
