// webpack.config.js

var webpack = require('webpack')
var NpmInstallPlugin = require('npm-install-webpack-plugin')

module.exports = {
  // Load `demo/index.js`
  entry: './src',

  // Generate `demo/bundle.js`
  output: {
    path: './demo',
    filename: 'bundle.js'
  }

  ,module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        include: __dirname + '/src',
      }
      , 
      {
        test: /\.css/,
        //loader: 'style-loader!css-loader?modules&importLoaders=1!postcss-loader',
        loader: 'style-loader!css-loader?modules',
        include: __dirname + '/src',
      }
    ],
  }

  ,plugins: [
    new NpmInstallPlugin({
      cacheMin: 999999,  // --cache-min=999999 (prefer NPM cached version)
      save: true,       // --save
      saveDev: true,    // --save-dev
      saveExact: true,  // --save-exact
    }),

    new webpack.HotModuleReplacementPlugin(),
  ]

  ,devServer: {
    contentBase: 'demo',
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  }
}
