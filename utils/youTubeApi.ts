const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const MAX_RESULT_ITEMS = 10;
let PAGINATION_TOKEN_NEXT: string = '';

export const searchVideo = async (search = '') => {
  try {
    const res = await fetch(
      `${BASE_URL}/search?q=${search}&part=snippet&maxResults=${MAX_RESULT_ITEMS}`,
      {
        headers: {
          ['X-RapidAPI-Key']: process.env.RAPID_API_KEY!,
          ['X-RapidAPI-Host']: process.env.RAPID_API_HOST!,
        },
        /*  cache: 'no-cache', */
      }
    );
    const result: SearchResult = await res.json();
    PAGINATION_TOKEN_NEXT = result?.nextPageToken || '';
    return result;
  } catch (error) {
    throw Error('Error!!');
  }
};

export const stepSearchVideo = async (search = '') => {
  try {
    console.log({ PAGINATION_TOKEN_NEXT });
    const res = await fetch(
      `${BASE_URL}/search?q=${search}&part=snippet&maxResults=${MAX_RESULT_ITEMS}&pageToken=${PAGINATION_TOKEN_NEXT}`,
      {
        headers: {
          ['X-RapidAPI-Key']: process.env.RAPID_API_KEY!,
          ['X-RapidAPI-Host']: process.env.RAPID_API_HOST!,
        },
        /*  cache: 'no-cache', */
      }
    );
    const result: SearchResult = await res.json();
    PAGINATION_TOKEN_NEXT = result?.nextPageToken || '';
    return result;
  } catch (error) {
    throw Error('Error!!');
  }
};

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
    console.log(`get fetchAPI!!!!!`);
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

export const getVideosOfChannel = async (id: string) => {
  try {
    const res = await fetch(
      `${BASE_URL}/search?part=snippet&relatedToVideoId=${id}&type=video`,
      {
        headers: {
          ['X-RapidAPI-Key']: process.env.RAPID_API_KEY!,
          ['X-RapidAPI-Host']: process.env.RAPID_API_HOST!,
        },
      }
    );
    const result: SearchResult = await res.json();

    return result.items;
  } catch (error) {
    throw Error('Error!!');
  }
};

export const getVideoDetail = async (id: string) => {
  try {
    const res = await fetch(
      `${BASE_URL}/videos?part=snippet,statistics&id=${id}`,
      {
        headers: {
          ['X-RapidAPI-Key']: process.env.RAPID_API_KEY!,
          ['X-RapidAPI-Host']: process.env.RAPID_API_HOST!,
        },
      }
    );
    const result: SearchResult = await res.json();
    console.log(`get fetchAPI!!!!!`);
    return result;
  } catch (error) {
    throw Error('Error!!');
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
    console.log(`get fetchAPI!!!!!`);
    return result;
  } catch (error) {
    throw Error('Error!!');
  }
};
