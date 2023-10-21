import { Videos } from '@/components/Videos';
import { searchVideo } from '@/utils/youTubeApi';
import { Box, Container, Typography } from '@mui/material';
import { Metadata, ResolvingMetadata } from 'next';
import React from 'react';

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({
  params: { searchTerm },
}: Props): Promise<Metadata> {
  return {
    title: searchTerm,
  };
}

const page = async ({ params: { searchTerm } }: Props) => {
  const data = await searchVideo(searchTerm);

  return (
    <Container maxWidth={false} component="main">
      <Typography variant="h4" fontWeight={900} mb={3} ml={{ sm: '100px' }}>
        Search Results for{' '}
        <span style={{ color: '#FC1503' }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={data.items} />
    </Container>
  );
};

export default page;
