module.exports = {
  webpack: {
    module: {
      rules: [
        {
          test: /\.css$/,
          loaders: ["style-loader", "css-loader"]
        }
      ]
    }
  }
};
