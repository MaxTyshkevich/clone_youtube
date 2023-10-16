import { ChannelCart } from '@/components/ChannelCart';
import { Videos } from '@/components/Videos';
import { getChannelById, getVideosOfChannel } from '@/utils/youTubeApi';
import { Container, Grid, Box } from '@mui/material';
type Props = {
  params: {
    id: string;
  };
};
const page = async ({ params: { id } }: Props) => {
  const channel = await getChannelById(id);
  const videosChanel = await getVideosOfChannel(id);

  console.log({ videosChanel });
  return (
    <Container maxWidth={false} component="main">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          height: '300px',
          background:
            'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }}
      >
        <ChannelCart video={channel} center />
      </Box>
      <Grid container>
        <Videos videos={videosChanel} />
      </Grid>
    </Container>
  );
};

export default page;
