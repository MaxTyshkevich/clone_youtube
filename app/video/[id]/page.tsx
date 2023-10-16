import { Player } from '@/components/Player';
import { getVideoById } from '@/utils/youTubeApi';
import { Container, Grid } from '@mui/material';

type Props = {
  params: {
    id: string;
  };
};
const page = async ({ params: { id } }: Props) => {
  const video = await getVideoById(id);

  return (
    <Container maxWidth={false} component="main" sx={{ minHeight: '100vh' }}>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Player id={id} />
        </Grid>
        <Grid item>text</Grid>
      </Grid>
    </Container>
  );
};

export default page;
