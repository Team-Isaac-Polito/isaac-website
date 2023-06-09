module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgo: true,
              typescript: true,
              babel: false,
              svgoConfig: {
                plugins: [
                  {
                    name: "preset-default",
                    removeViewBox: false,
                    removeDimensions: true,
                  },
                ],
              },
            },
          },
        ],
      },
    ],
  },
}
