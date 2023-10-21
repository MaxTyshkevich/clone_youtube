/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        pathname: '/**',
      },

      {
        protocol: 'https',
        hostname: '**.ytimg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'yt3.ggpht.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;

/* 
'https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s800-c-k-c0x00ffffff-no-rj'

ttps://i.ytimg.com/vi/EVIoG-xtLnw/hqdefault_live.jpg
'https://i.ibb.co/G2L2Gwp/API-Course.png'
https://i.ytimg.com/vi/6e-au0eiGqw/hqdefault_live.jpg
*/
