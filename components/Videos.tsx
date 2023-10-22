'use client';

import { Box, Grid, Stack } from '@mui/material';
import React from 'react';
import { VideoCard } from './VideoCard';
import { ChannelCart } from './ChannelCart';

type Props = {
  videos: VideoItem<any>[];
  lastRef?: (node?: Element | null | undefined) => void;
  stack?: boolean;
};

export const Videos = ({ videos = [], lastRef, stack = false }: Props) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={
        stack
          ? { xs: 2, sm: 4, md: 4, lg: 3 }
          : { xs: 2, sm: 8, md: 12, lg: 12 }
      }
      sx={{ overflow: 'auto', height: '100%', alignItems: 'stretch' }}
    >
      {videos.map((video, id) => {
        const islastItem = videos.length - 1 === id;
        const refProp = islastItem && lastRef ? { ref: lastRef } : {};
        return (
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            lg={3}
            key={JSON.stringify(video.id)}
            {...refProp}
            sx={{ margin: 0, padding: 0 }}
          >
            {video?.id?.videoId && <VideoCard video={video} horizon={stack} />}
            {video?.id?.channelId && <ChannelCart video={video} />}
          </Grid>
        );
      })}
    </Grid>
  );
};

/* 
  <>
          {(video.id?.videoId as VideoItem<VideoID>) && (
            <VideoCard video={video} key={video.id.videoId} />
          )}
          {video.id?.channelId && (
            <ChannalCart video={video} key={video.id.channelId} />
          )}
        </>

*/
