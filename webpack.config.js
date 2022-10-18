const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: '/',
        clean: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/main.css'
        }),
        new HtmlWebpackPlugin({
            filename: 'login.html',
            template: './src/templates/login.pug',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/templates/index.pug',
        }),
    ],
    module: {
        rules: [
            {    
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'resolve-url-loader',
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
              test: /\.(png|jpg|jpeg|svg|ico)/,
              type: 'asset/resource',
              generator: {
                filename: 'img/[name][ext]'
              }
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/i,
              type: 'asset/resource',
              generator: {
                filename: 'fonts/[name][ext]'
              }
            },
            {
                test: /\.pug$/,
                use: [
                    {
                      loader: 'pug-loader'
                    }
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ]
                  }
                }
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        static: 'dist',
        https: true,
        hot: false,
    },
    optimization: {
        runtimeChunk: 'single',
    },
    resolve: {
        alias: {
            Theme: path.resolve(__dirname, './src/assets/scss'),
            Fonts : path.resolve(__dirname, './src/assets/fonts'),
            Images: path.resolve(__dirname, './src/assets/img'),
            Partials : path.resolve(__dirname, './src/templates/partials'), 
            Components: path.resolve(__dirname, './src/templates/components'),
        }
    },
}