module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "url-loader"
        }
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: true
        }
      }
    ]
  }
};
