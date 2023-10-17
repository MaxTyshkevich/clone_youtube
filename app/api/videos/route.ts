import { searchVideo, stepSearchVideo } from '@/utils/youTubeApi';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('q') || '';
  const next = searchParams.get('next');

  if (next) {
    const response = await stepSearchVideo(search);
    return NextResponse.json(response);
  }

  const response = await searchVideo(search);
  return NextResponse.json(response);
}
