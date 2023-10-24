/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: 'custom',
  },
  webpack: (config, options) =>
  {
      config.module.rules.push({
          test: /\.pdf$/i,
          type: 'asset/source'
      })

      return config
  },
}
