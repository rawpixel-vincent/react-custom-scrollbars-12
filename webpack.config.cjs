'use strict';

var webpack = require('webpack');
var TerserPlugin = require('terser-webpack-plugin');

var plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
];

module.exports = {
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            targets: 'defaults',
            presets: [['@babel/preset-env']],
          },
        },
      },
    ],
  },
  output: {
    library: 'ReactCustomScrollbars',
    libraryTarget: 'umd',
  },
  plugins: plugins,
  resolve: {
    extensions: ['', '.js'],
  },
  optimization: {
    minimize: process.env.NODE_ENV === 'production',
    minimizer: [new TerserPlugin()],
  },
};
