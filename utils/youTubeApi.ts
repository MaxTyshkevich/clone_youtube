const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const MAX_RESULT_ITEMS = 10;

export const searchVideo = async (search = '', nextPageToken = '') => {
  try {
    const res = await fetch(
      `${BASE_URL}/search?q=${search}&part=snippet&maxResults=${MAX_RESULT_ITEMS}&pageToken=${nextPageToken}`,
      {
        headers: {
          ['X-RapidAPI-Key']: process.env.RAPID_API_KEY!,
          ['X-RapidAPI-Host']: process.env.RAPID_API_HOST!,
        },
        /*  cache: 'no-cache', */
      }
    );
    const result: SearchResult = await res.json();

    return result;
  } catch (error) {
    throw Error('Error!!');
  }
};
/* 
export const stepSearchVideo = async (search = '') => {
  try {
    const res = await fetch(
      `${BASE_URL}/search?q=${search}&part=snippet&maxResults=${MAX_RESULT_ITEMS}&pageToken=${PAGINATION_TOKEN_NEXT}`,
      {
        headers: {
          ['X-RapidAPI-Key']: process.env.RAPID_API_KEY!,
          ['X-RapidAPI-Host']: process.env.RAPID_API_HOST!,
        },
      }
    );
    const result: SearchResult = await res.json();

    return result;
  } catch (error) {
    throw Error('Error!!');
  }
}; */

export const getVideoById = async (id: string) => {
  try {
    const res = await fetch(
      `${BASE_URL}/search?id=${id}&part=snippet&maxResults=${MAX_RESULT_ITEMS}`,
      {
        headers: {
          ['X-RapidAPI-Key']: process.env.RAPID_API_KEY!,
          ['X-RapidAPI-Host']: process.env.RAPID_API_HOST!,
        },
      }
    );
    const result: SearchResult = await res.json();

    return result;
  } catch (error) {
    throw Error('Error!!');
  }
};

export const getChannelById = async (id: string) => {
  try {
    const res = await fetch(
      `${BASE_URL}/channels?part=snippet&id=${id}&maxResults=${MAX_RESULT_ITEMS}`,
      {
        headers: {
          ['X-RapidAPI-Key']: process.env.RAPID_API_KEY!,
          ['X-RapidAPI-Host']: process.env.RAPID_API_HOST!,
        },
      }
    );
    const result: SearchResult = await res.json();

    const firestItem = result.items[0];

    return firestItem;
  } catch (error) {
    throw Error('Error!!');
  }
};

export const getVideosOfChannel = async (id: string, nextPageToken = '') => {
  try {
    const res = await fetch(
      `${BASE_URL}/search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=${MAX_RESULT_ITEMS}&pageToken=${nextPageToken}`,
      {
        headers: {
          ['X-RapidAPI-Key']: process.env.RAPID_API_KEY!,
          ['X-RapidAPI-Host']: process.env.RAPID_API_HOST!,
        },
      }
    );
    const result: SearchResult = await res.json();

    return result;
  } catch (error) {
    throw Error('Error!!');
  }
};

export const getVideoDetail = async (id: string) => {
  try {
    const res = await fetch(
      `${BASE_URL}/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`,
      {
        headers: {
          ['X-RapidAPI-Key']: process.env.RAPID_API_KEY!,
          ['X-RapidAPI-Host']: process.env.RAPID_API_HOST!,
        },
      }
    );
    const result: SearchResult = await res.json();

    const details = result.items[0];
    if (!details) {
      throw Error('Описание видео не найдено!');
    }

    return details;
  } catch (error) {
    console.log({ error });
  }
};

export const getCommentsOfVideo = async (videoId: string) => {
  try {
    const res = await fetch(
      `${BASE_URL}/commentThreads?part=snippet&videoId=${videoId}`,
      {
        headers: {
          ['X-RapidAPI-Key']: process.env.RAPID_API_KEY!,
          ['X-RapidAPI-Host']: process.env.RAPID_API_HOST!,
        },
      }
    );
    const result: SearchResult = await res.json();

    return result;
  } catch (error) {
    throw Error('Error!!');
  }
};
