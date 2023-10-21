import {
  Stack,
  Box,
  Avatar,
  Typography,
  IconButton,
  Card,
} from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

type Props = {
  comments: CommentOfVideo[];
};
export const CommentsList = ({ comments }: Props) => {
  console.log(comments[6].snippet);
  return (
    <Stack mt={3} gap={2}>
      {comments.map((comment) => (
        <Card
          key={comment.snippet.topLevelComment.id}
          sx={{ display: 'flex', gap: 2, padding: 2 }}
        >
          <Avatar
            alt={comment.snippet.topLevelComment.snippet.authorDisplayName}
            src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
          />

          <Box>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <Typography variant="body1">
                {comment.snippet.topLevelComment.snippet.authorDisplayName}
              </Typography>
              <Typography variant="caption">
                {new Date(
                  comment.snippet.topLevelComment.snippet.publishedAt
                ).toLocaleDateString()}
              </Typography>
            </Box>

            <Typography variant="body2">
              {comment.snippet.topLevelComment.snippet.textDisplay}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton aria-label="Like">
                <ThumbUpOffAltIcon />
              </IconButton>
              <Typography variant="caption">
                {comment.snippet.topLevelComment.snippet.likeCount}
              </Typography>
              <IconButton aria-label="Like">
                <ThumbDownOffAltIcon />
              </IconButton>
            </Box>
          </Box>
        </Card>
      ))}
    </Stack>
  );
};
