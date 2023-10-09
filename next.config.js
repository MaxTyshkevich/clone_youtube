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
    ],
  },
};

module.exports = nextConfig;

/* 
ttps://i.ytimg.com/vi/EVIoG-xtLnw/hqdefault_live.jpg
'https://i.ibb.co/G2L2Gwp/API-Course.png'
https://i.ytimg.com/vi/6e-au0eiGqw/hqdefault_live.jpg
*/
