import { Videos } from '@/components/Videos';
import { getVideo } from '@/utils/youTubeApi';
import React from 'react';

type Props = {
  params: {
    searchTerm: string;
  };
};

const page = async ({ params: searchTerm }: Props) => {
  const data = await getVideo(searchTerm);

  console.log({ data });
  return (
    <div>
      <Videos videos={data.items} />
    </div>
  );
};

export default page;
