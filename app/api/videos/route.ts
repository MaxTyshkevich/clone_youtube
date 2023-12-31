import { searchVideo } from '@/utils/youTubeApi';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('q') || '';
  const nextPageToken = searchParams.get('nextpage') || '';

  try {
    const response = await searchVideo(search, nextPageToken);
    return NextResponse.json(response);
  } catch (error) {
    console.log({ error });
  }
}
