'use client';

import { Box } from '@mui/material';
import ReactPlayer from 'react-player/youtube';

type Props = {
  id: string;
};

export const Player = ({ id }: Props) => {
  return (
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${id}`}
      controls
      width="100%"
    />
  );
};
