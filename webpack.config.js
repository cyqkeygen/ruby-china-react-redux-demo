const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
const dashboard = new Dashboard();

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
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        exclude: path.resolve(__dirname, 'src/styles/common'),
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              module: true,
              importLoaders: 2,
              localIdentName: '[name]__[local]_[hash:base64:5]',
              sourceMap: true
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.scss/,
        include: path.resolve(__dirname, 'src/styles/common'),
        loader: 'style-loader!css-loader!sass-loader?sourceMap=true'
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
  devtool: 'source-map',
  plugins: [
    new CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    }),
    new DashboardPlugin(dashboard.setData),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      hash: true,
    })
  ],
  devServer: {
    port: 9000,
    compress: true,
    quiet: true,
    historyApiFallback: true,
    overlay: {
      warning: true,
      errors: true
    }
  }
}
