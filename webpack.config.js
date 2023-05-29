const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

// Our function that generates our html plugins
function generateHtmlPlugins(templateDir) {
  // Read files in template directory
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map((item) => {
    // Split names and extension
    const parts = item.split(".");
    const name = parts[0];
    const extension = parts[1];
    // Create new HTMLWebpackPlugin with options
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
    });
  });
}
// Call our function on our views directory.
const htmlPlugins = generateHtmlPlugins("./src/templates/views");

module.exports = {
  entry: ["./src/app.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js?v=<?= env('js_versiyon') ?>", //?v=<?= env('js_versiyon') ?>
    assetModuleFilename: "[path][name][ext]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "resolve-url-loader",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|svg|ico|docx|mp4)/,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.pug$/,
        use: "pug-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    static: "dist",
    https: true,
    hot: false,
  },
  optimization: {
    runtimeChunk: "single",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/main.css?v=<?= env('css_versiyon') ?>", //?v=<?= env('css_versiyon') ?>
    }),
    new Dotenv(),
  ].concat(htmlPlugins),
  resolve: {
    alias: {
      Theme: path.resolve(__dirname, "./src/assets/scss"),
      Fonts: path.resolve(__dirname, "./src/assets/fonts"),
      Images: path.resolve(__dirname, "./src/assets/img"),
      Upload: path.resolve(__dirname, "./src/assets/upload"),
      Partials: path.resolve(__dirname, "./src/templates/partials"),
      Components: path.resolve(__dirname, "./src/templates/components"),
      Widgets: path.resolve(__dirname, "./src/templates/widgets"),
      Members: path.resolve(__dirname, "./src/templates/view"),
      FlatPages: path.resolve(__dirname, "./src/templates/flatpages"),
    },
  },
};
