const path = require('path');
const webpack = require('webpack');
const cpx = require('cpx');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('config');
const autoprefixer = require('autoprefixer');
const pkg = require('../../package.json');

cpx.copy(
  path.resolve(process.cwd(), 'node_modules/@axa-fr/react-toolkit-core/dist/assets', '**/*'),
  path.resolve(process.cwd(), config.destDemo, 'assets'),
  {
    watch: true,
  },
);

const sassIncludePaths = [
  path.resolve(process.cwd(), config.assets),
  path.resolve(process.cwd(), config.bootstrap),
  path.resolve(process.cwd(), 'node_modules'),
];

module.exports = {
  entry: {
    js: ['babel-polyfill', './main.js'],
  },
  output: {
    path: path.resolve(process.cwd(), config.destDemo),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015'],
              plugins: [],
            },
          },
        ],
      },
      {
        test: /\.(s?)css?$/,
        exclude: /(axa-components|bootstrap|icons)/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: sassIncludePaths,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer(config.autoprefixer)],
            },
          },
        ],
      },
      {
        test: /\.(s?)css?$/,
        include: /(axa-components|bootstrap|icons)/,
        use: [
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: sassIncludePaths,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer(config.autoprefixer)],
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png)$/,
        include: /(docs)/,
        use: [
          {
            loader: 'file-loader', // creates style nodes from JS strings
            options: {
              name: '[name].[ext]',
              outputPath: 'docs/',
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: /(docs)/,
        use: [
          {
            loader: 'file-loader', // creates style nodes from JS strings
          },
        ],
      },
      {
        test: /\.pug$/i,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015'],
              plugins: [],
            },
          },
          {
            loader: 'pug-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=public/fonts/[name].[ext]',
      },
    ],
  },

  resolve: {
    modules: ['node_modules', path.resolve(process.cwd(), 'demo/app')],

    extensions: ['.js'],

    alias: {
      app: path.resolve(process.cwd(), 'demo/app'),
      'af-toolkit-core': path.resolve(process.cwd(), 'axa-components'),
      bootstrap: path.resolve(process.cwd(), 'dist/bootstrap'),
    },
  },

  performance: {
    hints: 'warning', // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter(assetFilename) {
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    },
  },

  devtool: 'source-map',

  context: __dirname,

  externals: {},

  target: 'web',

  stats: 'errors-only',

  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    }),
    new HtmlWebpackPlugin({ template: 'index.html' }),
  ],

  devServer: {
    contentBase: path.join(process.cwd(), config.destDemo),
    compress: true,
    port: 9000,
  },
};
