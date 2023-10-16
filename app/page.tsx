'use client';
import { Sidebar } from '@/components/Sidebar';
import { Videos } from '@/components/Videos';
import { Box, Container, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

/* 
params
: 
{}
searchParams
: 
{q: 'new'}

*/

type Props = {
  params: {};
  searchParams: {
    q?: string;
  };
};

export default function Home({ searchParams: { q } }: Props) {
  const [selectedCategory, setSelectedCategory] = useState(q || 'New');
  const [videos, setVideos] = useState<VideoItem<VideoID | ChannelID>[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  console.log(q);
  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/videos?q=${selectedCategory}`)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items);
        setIsLoading(false);
      });
  }, [selectedCategory]);

  return (
    <Container maxWidth={false} component="main">
      <Stack
        sx={{
          flexDirection: { sx: 'column', sm: 'row' },
          gap: { sx: 1, sm: 2 },
        }}
      >
        <Box
          sx={{
            height: { sx: 'auto', sm: '92vh' },
            borderRight: '1px solid #3d3d3d',
            px: { sx: 1, md: 2 },
          }}
        >
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <Typography>
            Copyright © {new Date().getFullYear()} JSM Media
          </Typography>
        </Box>
        <Box flexGrow={1}>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            {selectedCategory}
            {'  '}
            <Typography
              color="text.secondary"
              variant="h4"
              component={'span'}
              fontWeight="bold"
            >
              videos
            </Typography>
          </Typography>
          <Videos videos={videos} />
        </Box>
        {isLoading && <Box color={'HighlightText'}>Loading!!!</Box>}
      </Stack>
    </Container>
  );
}
