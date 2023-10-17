'use client';
import { useInView } from 'react-intersection-observer';
import { Box, Grid, Stack } from '@mui/material';
import React from 'react';
import { VideoCard } from './VideoCard';
import { ChannelCart } from './ChannelCart';

type Props = {
  videos: VideoItem<any>[];
  lastRef?: (node?: Element | null | undefined) => void;
};

export const Videos = ({ videos = [], lastRef }: Props) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 2, sm: 8, md: 12, lg: 12 }}
    >
      {videos.map((video, id) => {
        const islastItem = videos.length - 1 === id;
        console.log(`JSON.stringify(video.id)`, JSON.stringify(video.id));
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
          >
            {video?.id?.videoId && <VideoCard video={video} />}
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
