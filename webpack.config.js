const path = require('path');
const webpack = require('webpack');
const configs = [
  {
    entry: process.env.ENTRY,
    output: {
      filename: process.env.OUTPUT_FILENAME,
      path: path.resolve(__dirname, './bin')
    },
    resolve: {
      extensions: ['.js'],
    },
    target: 'node',
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.js?$/,
          loader: 'babel-loader',
        },
      ],
    },
    plugins: [
      new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true }),
    ]
  },
]

module.exports = configs;