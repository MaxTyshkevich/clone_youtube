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
  horizon?: boolean;
};

export const VideoCard = ({ video: { id, snippet }, horizon }: Props) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: horizon ? 'row' : 'column',

        flexGrow: 1,
      }}
    >
      {/* 
       width: { xs: '100%', sm: 'calc(50% - 8 * 2)', md: 280 },
      */}
      <Link
        href={`/video/${id.videoId}`}
        style={{
          position: 'relative',
          paddingTop: horizon ? 0 : '56.25%',

          width: horizon ? 325 : '100%',
        }}
      >
        <Image
          /* component={Image} */

          src={snippet?.thumbnails?.high?.url}
          fill
          /*   fill
          sizes="@media(width-max: 800px) 600" */
          style={{ objectFit: 'cover' }}
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
