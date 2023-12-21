import { getVideoDetail } from '@/utils/youTubeApi';
import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export const alt = 'About Acme';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({
  params: { id },
}: {
  params: { id: string };
}) {
  // ...
  const video = await getVideoDetail(id);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={video?.snippet?.thumbnails?.high?.url} alt="logo" />
        {video.title}
      </div>
    ),
    {
      ...size,
    }
  );
}
