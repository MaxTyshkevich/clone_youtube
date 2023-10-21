type ChannelID = {
  kind: string;
  channelId: string;
};

type VideoID = {
  kind: string;
  videoId: string;
};

type s = ChannelID | VideoID;

type VideoItem<T extends ChannelID | VideoID> = {
  kind: string;
  id: T;
  snippet: {
    channelId: string;
    publishedAt: Date;
    title: string;
    description: string;
    thumbnails: {
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: Date;
  };
};

type CommentOfVideo = {
  kind: string;
  id: string;
  snippet: {
    channelId: string;
    videoId: string;
    topLevelComment: {
      kind: string;
      id: string;
      snippet: any;
    };
    canReply: boolean;
    totalReplyCount: number;
    isPublic: boolean;
  };
};

type SearchResult = {
  kind: string;
  items: VideoItem[];
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
};
