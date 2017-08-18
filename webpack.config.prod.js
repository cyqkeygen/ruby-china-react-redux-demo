const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCss = new ExtractTextPlugin({
  filename: 'styles/[name].css'
});

const extractSass = new ExtractTextPlugin({
  filename: 'styles/[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development'
});

/* const cssLoader = new ExtractTextPlugin({
  fallback: 'style-loader',
  use: [{
    loader: 'css-loader',
    options: {
      module: true,
      importLoaders: 1,
      localIdentName: '[name]__[local]__[hash:base64:5]',
    }
  }, 'postcss-loader']
}); */

const sassLoader = extractSass.extract({
  fallback: 'style-loader',
  use: [{
    loader: 'css-loader',
    options: {
      module: true,
      importLoaders: 1,
      localIdentName: '[name]__[local]__[hash:base64:5]'
    }
  }, {
    loader: 'sass-loader'
  }]
});

const commonSassLoader = extractSass.extract({
  fallback: 'style-loader',
  use: [{
    loader: 'css-loader',
    options: {
      module: true,
      importLoaders: 1,
      localIdentName: '[local]'
    }
  }, {
    loader: 'sass-loader'
  }]
});

module.exports = {
  entry: {
    index: './src/index.js',
    vendor: ['react', 'react-redux', 'react-dom', 'redux', 'prop-types', 'react-router-dom']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name]__[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      /* {
        test: /\.css$/,
        exclude: /node_modules/,
        use: cssLoader
      }, */
      {
        test: /\.scss$/,
        exclude: path.resolve(__dirname, 'src/styles/common'),
        use: sassLoader
      },
      {
        test: /\.scss/,
        include: path.resolve(__dirname, 'src/styles/common'),
        use: commonSassLoader
      },
      {
        test: /\.(gif|jpe?g|eot|woff|ttf|svg|pdf)/,
        exclude: /^node_modules$/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /^node_modules$/,
        loader: 'url-loader?limit=20000&name=[name].[ext]'
      }
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    mainFields: ['jsnext:main', 'browser', 'main']
  },
  plugins: [
    new CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    }),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      hash: true,
    }),
    extractCss,
    extractSass
  ]
}
