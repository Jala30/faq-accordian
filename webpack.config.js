const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: ['./src/fab-accordian.ts', './styles/fab-accordian.scss'] // Combine TypeScript and SCSS into a single entry
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.scss']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'fab-accordian.css'
    })
  ],
  output: {
    filename: 'fab-accordian.js', // Output combined JavaScript bundle
    path: path.resolve(__dirname, 'dist')
  }
};