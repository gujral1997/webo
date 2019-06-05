const HtmlWebpackPlugin = require("html-webpack-plugin"); // first import ...

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin() // ... then register it
  ],
  devtool: "source-map"
};

/**
 *
 * To Skip index.html as output in production
 */

// // To prevent argv being undefined, let's use a default value
// module.exports = (env = {}, argv = {}) => ({
//     // ...
//     plugins: [
//         // Any option given to Webpack client can be captured on the "argv"
//         argv.mode === "development" ? new HtmlWebpackPlugin() : null
//     ].filter(
//         // To remove any possibility of "null" values inside the plugins array, we filter it
//         plugin => !!plugin
//     )
// });
