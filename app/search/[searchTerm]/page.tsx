import { Videos } from '@/components/Videos';
import { searchVideo } from '@/utils/youTubeApi';
import { Box, Typography } from '@mui/material';
import React from 'react';

type Props = {
  params: {
    searchTerm: string;
  };
};

const page = async ({ params: searchTerm }: Props) => {
  console.log({ searchTerm });

  const data = await searchVideo(searchTerm);

  /*   console.log({ data }); */
  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight={900}
        color="white"
        mb={3}
        ml={{ sm: '100px' }}
      >
        Search Results for{' '}
        <span style={{ color: '#FC1503' }}>{searchTerm}</span> videos
      </Typography>
      {/* <Videos videos={data.items} /> */}
    </Box>
  );
};

export default page;
