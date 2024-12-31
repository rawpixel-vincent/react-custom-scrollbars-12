/* eslint no-var: 0, no-unused-vars: 0 */
var path = require('path');

module.exports = function karmaConfig(config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: ['./test.js'],
    preprocessors: {
      './test.js': ['webpack', 'sourcemap'],
    },
    reporters: ['mocha'].concat(coverageReporters),
    webpack: {
      devtool: 'inline-source-map',
      resolve: {
        alias: {
          'react-custom-scrollbars-12': path.resolve(__dirname, './src'),
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
    },
  });
};
