export const searchVideo = async () => {
  try {
    const res = await fetch(
      'https://youtube-v31.p.rapidapi.com/search?q=new&part=snippet%2Cid&regionCode=US&maxResults=50&order=date',
      {
        headers: {
          ['X-RapidAPI-Key']: process.env.RAPID_API_KEY!,
          ['X-RapidAPI-Host']: process.env.RAPID_API_HOST!,
        },
        /*  cache: 'no-cache', */
      }
    );
    const result = await res.json();
    console.log(`get fetchAPI!!!!!`);
    return result;
  } catch (error) {
    throw Error('Error!!');
  }
};

export const getVideo = async (idVideo: string = ''): Promise<SearchResult> => {
  try {
    const response = await fetch(
      `https://youtube-v31.p.rapidapi.com/search?q=${idVideo}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`,
      {
        headers: {
          ['X-RapidAPI-Key']: process.env.RAPID_API_KEY!,
          ['X-RapidAPI-Host']: process.env.RAPID_API_HOST!,
        },
      }
    );

    if (!response.ok) {
      throw Error('Err');
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};
