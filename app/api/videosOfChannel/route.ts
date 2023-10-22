import { getVideosOfChannel } from '@/utils/youTubeApi';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const channelId = searchParams.get('channelId') || '';
  const nextPageToken = searchParams.get('nextpage') || '';

  try {
    const response = await getVideosOfChannel(channelId, nextPageToken);
    return NextResponse.json(response);
  } catch (error) {
    console.log({ error });
  }
}
