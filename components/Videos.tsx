'use client';
import { Box, Grid, Stack } from '@mui/material';
import React from 'react';
import { VideoCard } from './VideoCard';
import { ChannelCart } from './ChannelCart';

type Props = {
  videos: VideoItem<VideoID>[];
};

export const Videos = ({ videos = [] }: Props) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 2, sm: 8, md: 12, lg: 12 }}
    >
      {videos.map((video) => (
        <>
          {video.id?.videoId && (
            <VideoCard video={video} key={video.id.videoId} />
          )}
          {video.id?.channelId && (
            <ChannelCart video={video} key={video.id.channelId} />
          )}
        </>
      ))}
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
