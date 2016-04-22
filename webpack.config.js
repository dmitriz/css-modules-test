// webpack.config.js

var webpack = require('webpack')
var NpmInstallPlugin = require('npm-install-webpack-plugin')
var autoprefixer = require('autoprefixer')

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
        loaders: [
          'style-loader', 
          'css-loader?modules&importLoaders=1',
          'postcss-loader'
        ],
        //loader: 'style-loader!css-loader?modules5',
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

  ,postcss: function () {
        return [autoprefixer];
    }

  ,devServer: {
    contentBase: 'demo',
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  }

}
