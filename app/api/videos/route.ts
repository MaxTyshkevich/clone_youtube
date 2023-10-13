import { searchVideo } from '@/utils/youTubeApi';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('q') || '';

  const response = await searchVideo(search);

  return NextResponse.json(response);
}
