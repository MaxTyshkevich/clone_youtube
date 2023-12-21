import Link from 'next/link';
import Image from 'next/image';
import { headers } from 'next/headers';
import imageNotFound from '@/public/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg';
import { Box, Button, Container, Typography } from '@mui/material';

export default function NotFound() {
  const headersList = headers();
  console.log({ headersList });
  return (
    <Container
      maxWidth={false}
      component="main"
      sx={{
        height: 'calc(100vh - 80px)',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          ['& >  h2']: { position: 'absolute' },
        }}
      >
        <Button component={Link} href="/" color="success" variant="contained">
          Return Home
        </Button>
        <Typography color="primary" variant="h2" sx={{ top: 40 }}>
          Not Found
        </Typography>
        <Typography color="primary">
          Could not find requested resource
        </Typography>
        <Image src={imageNotFound} alt="image not Found" />
      </Box>
    </Container>
  );
}
