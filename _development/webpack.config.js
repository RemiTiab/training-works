var WebpackNotifierPlugin = require('webpack-notifier');
var path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    global: './src/js/main.js',
    styles: './src/scss/main.scss'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../assets/')
  },
  plugins: [new WebpackNotifierPlugin()],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'css/[name].css'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader?-url'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    alias: {
      TweenLite: path.resolve(
        'node_modules',
        'gsap/src/uncompressed/TweenLite.js'
      ),
      TweenMax: path.resolve(
        'node_modules',
        'gsap/src/uncompressed/TweenMax.js'
      ),
      TimelineLite: path.resolve(
        'node_modules',
        'gsap/src/uncompressed/TimelineLite.js'
      ),
      TimelineMax: path.resolve(
        'node_modules',
        'gsap/src/uncompressed/TimelineMax.js'
      ),
      ScrollMagic: path.resolve(
        'node_modules',
        'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'
      ),
      'animation.gsap': path.resolve(
        'node_modules',
        'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'
      ),
      'debug.addIndicators': path.resolve(
        'node_modules',
        'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'
      )
    }
  }
};
