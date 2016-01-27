var webpack = require('webpack');

module.exports = {
  entry: [
        // 'webpack/hot/only-dev-server',
        "./main.jsx"
  ],
  devtool: "eval-source-map",
  output: {
    // path: __dirname + '/build',
    filename: "bundle.js"
  },
  plugins: [
    new webpack.NoErrorsPlugin({
      "_": "underscore",
      "$": "jquery"
    })
  ],
  module: {
    loaders: [
      {test: /\.css$/, loader:'style!css'},
      {test: /\.json$/, loader:'json'},
      // {test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony'},
      {test: /\.jsx?$/, loader: 'babel-loader?presets[]=react&presets[]=es2015', exclude: /node_modules/ },
      {test: /\.css$/, loader: "style!css" }
    ]
  }
}

