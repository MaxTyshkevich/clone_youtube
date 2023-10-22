'use client';

import { Videos } from '@/components/Videos';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

type Props = {
  videosOfChannel: VideoItem<VideoID | ChannelID>[];
  channelId: string;
  tokenNextPage?: string;
};

export const VideoContainer = ({
  videosOfChannel,
  tokenNextPage,
  channelId,
}: Props) => {
  const [nextpage, setNextpage] = useState(tokenNextPage || '');
  const [videos, setVideos] =
    useState<VideoItem<VideoID | ChannelID>[]>(videosOfChannel);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && !isLoading) {
      fetch(`/api/videosOfChannel?channelId=${channelId}&nextpage=${nextpage}`)
        .then((response) => response.json())
        .then((data) => {
          setVideos((prevVideos) => [...prevVideos, ...data.items]);
          setNextpage(data?.nextPageToken || '');
          setIsLoading(false);
        });
    }
  }, [inView, isLoading]);

  return (
    <Box>
      {' '}
      <Videos videos={videos} stack lastRef={ref} />
    </Box>
  );
};
