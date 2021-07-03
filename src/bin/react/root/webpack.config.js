module.exports = ({
  name,
  typescript,
  antd,
}) => `const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssWebpackPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

let config = {
  entry: './src/index.${typescript ? "t" : "j"}sx',
  output: {
    filename: 'bundle.[name].js',
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
      "@c": path.resolve(__dirname, './src/components'),
      "@l": path.resolve(__dirname, './src/layout'),
      "@p": path.resolve(__dirname, './src/pages'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.${typescript ? "t" : "j"}sx?$/,
        loader: '${typescript ? "ts-loader" : "babel-loader"}',
      },
      {
        test: /\.css$/,
        use: [CssWebpackPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.styl$/,
        use: [
          CssWebpackPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[hash:base64:16]',
              },
            },
          },
          'postcss-loader',
          'stylus-loader',
        ],
      },
      ${
        antd
          ? `{
        test: /\.less$/,
        use: [
          CssWebpackPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            }
          }
        ],
      },`
          : ""
      }
      {
        test: /\.(jpg|png|svg|gif)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'dist')],
    }),
    new CssWebpackPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      title: '${name}',
      filename: 'index.html',
      template: './src/app.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      MODE: JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  optimization: {
    splitChunks: {
      name: 'common',
      chunks: 'all',
    },
  },
};

if (process.env.REPORT) {
  config.plugins.push(new BundleAnalyzerPlugin());
}

if (process.env.NODE_ENV === 'local') {
  config = Object.assign(config, {
    devtool: 'source-map',
    mode: 'development',
    devServer: {
      contentBase: './dist',
      host: 'localhost',
      hot: true,
      historyApiFallback: true,
      compress: true,
    },
  });
  config.module.rules.push({
    test: /\.${typescript ? "t" : "j"}sx?$/,
    enforce: 'pre',
    loader: 'eslint-loader',
  });
  ${
    typescript
      ? `config.module.rules.push({
    enforce: 'pre',
    test: /\.js$/,
    loader: 'source-map-loader',
    exclude: /node_modules/,
  });`
      : ""
  }
}

module.exports = config;`;
