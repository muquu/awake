module.exports = {
  context: __dirname + '/src',

  entry: {
    javascript: './index.js',
    html: './index.html'
  },

  output: {
    path: __dirname + '/www',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: 'www',
    port: 3000
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        // https://github.com/babel/babel-loader
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        // https://github.com/webpack/file-loader
        test: /\.html$/,
        loader: 'file?name=[path][name].[ext]'
      },
      { test: /\.svg$/, loader: 'url-loader?mimetype=image/svg+xml' },
      { test: /\.woff$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.woff2$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.eot$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'url-loader?mimetype=application/font-woff' }
    ]
  },

  postcss: function() {
    var precss = require('precss');
    var autoprefixer = require('autoprefixer');
    return [
      autoprefixer({ browsers: ['IE 9', 'IE 10', 'IE 11', 'last 2 versions'] }),
      precss
    ];
  }
};
