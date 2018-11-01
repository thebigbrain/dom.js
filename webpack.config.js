const path = require('path');

module.exports = {
  target: "node",
  mode: "production",
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "dom.js"
  },
  module: {
    rules: [
      {
        test: /\.idl$/,
        enforce: "pre",
        use: [path.resolve(__dirname, 'tools', 'idl2domjs.js')]
      }
    ]
  }
};
