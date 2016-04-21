module.exports = {
  entry: './src',
  output: {
    path: 'build',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        include: __dirname + '/src',
      }
      ,
      {
        test: /\.css/,
        loader: 'style-loader!css-loader?modules',
        include: __dirname + '/src',
      }
    ],
  }
}
