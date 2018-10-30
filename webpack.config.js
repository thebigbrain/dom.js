const path = require('path');

module.exports = {
  target: "node",
  mode: "production",
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "dom.js"
  }
};