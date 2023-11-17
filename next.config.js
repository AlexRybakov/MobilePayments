/** @type {import('next').NextConfig} */

const imagesPlugin = require('next-images');

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    disableStaticImages: true,
  },
};

module.exports = {
  compiler: {
    styledComponents: true,
  },
};
