/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/boards',
        permanent: true,
      },
      {
        source: '/board',
        destination: '/boards',
        permanent: true,
      },
    ]
  },
}
