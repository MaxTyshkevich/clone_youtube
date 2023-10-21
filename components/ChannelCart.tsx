import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  styled,
} from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { demoThumbnailUrl } from '@/utils/contants';
import Link from 'next/link';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type Props = {
  video: VideoItem<ChannelID>;
  center?: boolean;
};

export const ChannelCart = ({
  video: { id, snippet },
  center = false,
}: Props) => {
  console.log({ s: snippet.thumbnails });

  return (
    <Card
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        boxShadow: 'none',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        // center && ...{width: '20%'},
        width: center ? 200 : 'auto',
      }}
    >
      <Link href={`/channel/${id.channelId}`}>
        <Image
          src={snippet.thumbnails.high.url}
          width={snippet.thumbnails.high?.width || 600}
          height={snippet.thumbnails.high?.height || 320}
          style={{ maxWidth: '100%', height: 'auto' }}
          alt={snippet.title}
        />
        <CardContent>
          <Typography variant="h6">
            {snippet?.title}
            <CheckCircleIcon
              sx={{ fontSize: '14px', color: 'gray', ml: '5px' }}
            />
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            {snippet?.title.slice(0, 60)}
          </Typography>
          <Typography>{snippet?.channelTitle}</Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

/* export const ChannelCart = styled(ChannelCart1)((...p) => {
 
  return {
    
  };
});
 */
