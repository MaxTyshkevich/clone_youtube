export const searchVideo = async (search = '') => {
  try {
    const res = await fetch(
      `https://youtube-v31.p.rapidapi.com/search?q=${search}&part=snippet`,
      {
        headers: {
          ['X-RapidAPI-Key']: process.env.RAPID_API_KEY!,
          ['X-RapidAPI-Host']: process.env.RAPID_API_HOST!,
        },
        /*  cache: 'no-cache', */
      }
    );
    const result: SearchResult = await res.json();
    console.log(`get fetchAPI!!!!!`);
    return result;
  } catch (error) {
    throw Error('Error!!');
  }
};
