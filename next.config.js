/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    MAPBOX_TOKEN: process.env.MAPBOX_TOKEN,
  },
};
