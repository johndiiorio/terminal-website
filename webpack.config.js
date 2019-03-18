const path = require('path');

let config = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [],
};

if (process.env.NODE_ENV === 'production') {
	// TODO
}

module.exports = config;