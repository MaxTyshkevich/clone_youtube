import { searchVideo } from '@/utils/youTubeApi';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const response = await searchVideo();

  console.log(response);
  return NextResponse.json(response);
}
