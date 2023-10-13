'use client';
import { Box, Stack } from '@mui/material';
import React from 'react';
import { VideoCard } from './VideoCard';

type Props = {
  videos: VideoItem[];
};

export const Videos = ({ videos = [] }: Props) => {
  return (
    <Stack
      sx={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: { xs: 5, sm: 7 },
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      }}
    >
      {videos.map((video) => (
        <Box key={video.id.videoId}>
          {video.id.videoId && <VideoCard video={video} />}
          {/*  {video.id?.channelId && `CHANNAL`} */}
        </Box>
      ))}
    </Stack>
  );
};
