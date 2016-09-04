const path = require('path');

const config = {
  module: {
    loaders: [
      {
        test: /\.css?$/,
        loaders: ['style', 'raw'],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.json?$/,
        loaders: ['json'],
        include: path.resolve(__dirname, '../'),
      }
    ],
  }
};

module.exports = config;
