import { CommentsList } from '@/components/CommentsList';
import { Player } from '@/components/Player';
import { Videos } from '@/components/Videos';
import {
  getCommentsOfVideo,
  getVideoDetail,
  getVideosOfChannel,
} from '@/utils/youTubeApi';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';
import { VideoContainer } from './components/VideoContainer';

type Props = {
  params: {
    id: string;
  };
};

const Description = ({ text }: { text: string }) => {
  const ArrayStrings = text.split('\n\n');

  if (!ArrayStrings.length) return null;
  return (
    <Stack gap={2}>
      {ArrayStrings.map((s, index) => {
        const includeUrl = s.match(
          /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/
        );
        if (includeUrl) {
          const title = s.replace(
            /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/,
            ''
          );
          return (
            <Link href={includeUrl[0]} key={index}>
              {title}
            </Link>
          );
        }

        return <Typography key={index}>{s}</Typography>;
      })}
    </Stack>
  );
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const video = await getVideoDetail(id);

  return {
    title: video.snippet.title,
  };
}

const page = async ({ params: { id } }: Props) => {
  const fetchvideoDetails = await getVideoDetail(id);
  const fetchcommentsOfVideo = await getCommentsOfVideo(id);

  const [videoDetails, commentsOfVideo] = await Promise.all([
    fetchvideoDetails,
    fetchcommentsOfVideo,
  ]);

  console.log({ videoDetails });

  const data = await getVideosOfChannel(videoDetails.snippet.channelId);
  const videosOfChannel = data.items;

  return (
    <Container maxWidth={false} component="main" sx={{ minHeight: '100vh' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Box>
            <Player id={id} />
            <Box mt={{ xs: 3, lg: 0 }}>
              <Link href={`/channel/${videoDetails.snippet.channelId}`}>
                <Typography variant="h4">
                  {videoDetails.snippet.title}
                </Typography>
              </Link>
              <Description text={videoDetails.snippet.description} />

              <CommentsList comments={commentsOfVideo.items} />
            </Box>
          </Box>
        </Grid>

        <Grid item mt={10} xs={12} md={4}>
          <VideoContainer
            videosOfChannel={videosOfChannel}
            channelId={videoDetails.snippet.channelId}
            tokenNextPage={data.nextPageToken}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default page;
