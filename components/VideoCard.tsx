import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { demoThumbnailUrl } from '@/utils/contants';
import Link from 'next/link';

type Props = {
  video: VideoItem;
};

export const VideoCard = ({ video: { id, snippet } }: Props) => {
  return (
    <Card
      sx={{ width: { xs: '100%', sm: 320, md: 360 }, position: 'relative' }}
    >
      <Link href={`/video/${id.videoId}`}>
        <CardMedia
          /* fill={true} */
          component="img"
          /*  component={Image} */
          /* height="194" */
          alt={snippet.title}
          src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        />
      </Link>
      <CardContent>
        <Typography>{snippet?.title.slice(0, 60)}</Typography>
        <Typography>{snippet?.channelTitle}</Typography>
      </CardContent>
    </Card>
  );
};
