/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d33wubrfki0l68.cloudfront.net",
        port: "",
        pathname: "**",
      },
    ],
  },
  modularizeImports:{
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  }
}

module.exports = nextConfig
