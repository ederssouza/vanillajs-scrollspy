import { join } from 'path';

const include = join(__dirname, 'src');

export default {
  mode: 'development',
  entry: './index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'VanillaScrollspy',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['es2015', { modules: false }]
          ],
        },
      },
    ],
  },
};
