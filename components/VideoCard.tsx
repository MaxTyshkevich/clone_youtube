'use client';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import React from 'react';
import { demoThumbnailUrl } from '@/utils/contants';

type Props = {
  video: VideoItem<VideoID>;
};

export const VideoCard = ({ video: { id, snippet } }: Props) => {
  return (
    <Card
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
      }}
    >
      {/* 
       width: { xs: '100%', sm: 'calc(50% - 8 * 2)', md: 280 },
      */}
      <Link href={`/video/${id.videoId}`}>
        <Image
          /* component={Image} */

          src={snippet?.thumbnails?.high?.url}
          width={600}
          height={320}
          style={{ maxWidth: '100%', height: 'auto' }}
          alt={snippet.title}
        />
      </Link>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" fontWeight="bold">
          {snippet?.title.slice(0, 60)}
        </Typography>

        <Typography
          component={Link}
          href={`/channel/${snippet.channelId}`}
          color={'text.primary'}
        >
          {snippet?.channelTitle}
        </Typography>
      </CardContent>
    </Card>
  );
};
