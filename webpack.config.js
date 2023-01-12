const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const fs = require("fs");

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
const htmlPlugins = generateHtmlPlugins('./src/templates/views')

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    publicPath: "/",
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: "css/main.css",
    }),
  ].concat(htmlPlugins),
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
        test: /\.(png|jpg|jpeg|svg|ico)/,
        type: "asset/resource",
        generator: {
          filename: "img/[name][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.pug$/,
        use: 'pug-loader'
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
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
  resolve: {
    alias: {
      Theme: path.resolve(__dirname, "./src/assets/scss"),
      Fonts: path.resolve(__dirname, "./src/assets/fonts"),
      Images: path.resolve(__dirname, "./src/assets/img"),
      Partials: path.resolve(__dirname, "./src/templates/partials"),
      Components: path.resolve(__dirname, "./src/templates/components"),
      Widgets: path.resolve(__dirname, "./src/templates/widgets"),
      Members: path.resolve(__dirname, "./src/templates/view"),
      FlatPages: path.resolve(__dirname, "./src/templates/flatpages"),
    },
  },
};
