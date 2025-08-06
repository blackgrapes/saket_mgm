import { connectDB } from '@/lib/mongodb';
import { News } from '@/models/news';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();
    const news = await News.find().sort({ date: -1 });
    return NextResponse.json(news);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}
