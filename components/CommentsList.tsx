import { Stack, Box } from '@mui/material';
import React from 'react';

type Props = {
  comments: CommentOfVideo[];
};
export const CommentsList = ({ comments }: Props) => {
  console.log(comments[0].snippet.topLevelComment.snippet);

  return (
    <Stack>
      {comments.map((comment) => (
        <Box key={comment.id}>
          {comments[0].snippet.topLevelComment.snippet.textOriginal}
        </Box>
      ))}
    </Stack>
  );
};
