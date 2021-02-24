const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = (env, options) => {
  return {
    entry: {
      popup: './src/popup/popup.ts',
      content: './src/content/content.ts',
      background: './src/background/background.ts'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    devtool: options.mode !== 'production' ? 'inline-source-map' : false,
    watchOptions: {
      ignored: 'node_modules/**'
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css'
      }),
      new CopyPlugin({
        patterns: [
          {from: './src/index.html', to: ''},
          {from: './src/manifest.json', to: ''}
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.ts$/i,
          use: 'ts-loader',
          include: [path.resolve(__dirname, 'src')]
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js'],
    }
  }
}
