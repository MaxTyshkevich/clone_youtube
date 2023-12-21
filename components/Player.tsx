'use client';

import { Box } from '@mui/material';
import { LegacyRef, useCallback, useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player/youtube';

type Props = {
  id: string;
};

export const Player = ({ id }: Props) => {
  return (
    <Box sx={{ width: '100%', paddingTop: '52.65%', position: 'relative' }}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        width={'100%'}
        height={'100%'}
        controls
        /* playing={true} */
        style={{ position: 'absolute', top: 0 }}
      />
    </Box>
  );
};
