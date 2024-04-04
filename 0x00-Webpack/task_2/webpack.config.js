const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Apply this rule to .css files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // Apply this rule to image files
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // Convert images smaller than 8kb to base64 strings
              name: 'images/[name].[ext]', // Output path for images
            },
          },
        ],
      },
    ],
  },
};
