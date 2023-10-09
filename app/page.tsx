'use client';
import { Sidebar } from '@/components/Sidebar';
import { Videos } from '@/components/Videos';
import { getVideo, searchVideo } from '@/utils/youTubeApi';
import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState<VideoItem[]>([]);
  /* const data: SearchResult = await searchVideo(); */

  useEffect(() => {
    /* http://localhost:3000/api/videos?q=${selectedCategory} */
    fetch(`/api/videos?q=${selectedCategory}`)
      .then((response) => response.json())
      .then((data) => {
        console.log({ data });
        setVideos(data.items);
      });
  }, [selectedCategory]);

  return (
    <main>
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
            px: { sx: 0, md: 2 },
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
        <Box>
          <Typography>Search text</Typography>
          <Videos videos={videos} />
        </Box>
      </Stack>
    </main>
  );
}
