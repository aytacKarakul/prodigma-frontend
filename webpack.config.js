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
        new HtmlWebpackPlugin({
            filename: 'proje-baslat.html',
            template: './src/templates/proje-baslat.pug',
        }),
        new HtmlWebpackPlugin({
            filename: '3d-baski.html',
            template: './src/templates/3d-baski.pug',
        }),
        new HtmlWebpackPlugin({
            filename: 'endustriyel.html',
            template: './src/templates/endustriyel.pug',
        }),
        new HtmlWebpackPlugin({
            filename: 'cnc-isleme.html',
            template: './src/templates/cnc-isleme.pug',
        }),
        new HtmlWebpackPlugin({
            filename: 'silikon-kaliplama.html',
            template: './src/templates/silikon-kaliplama.pug',
        }),
        new HtmlWebpackPlugin({
            filename: 'enjeksiyon-kaliplama.html',
            template: './src/templates/enjeksiyon-kaliplama.pug',
        }),
        new HtmlWebpackPlugin({
            filename: 'enjeksiyon-kaliplama.html',
            template: './src/templates/enjeksiyon-kaliplama.pug',
        }),
        new HtmlWebpackPlugin({
            filename: 'sac-metal-isleme.html',
            template: './src/templates/sac-metal-isleme.pug',
        }),
        new HtmlWebpackPlugin({
            filename: '3d-tarama-tersine-muhendislik.html',
            template: './src/templates/3d-tarama-tersine-muhendislik.pug',
        }),
        new HtmlWebpackPlugin({
            filename: 'ardil-islemler.html',
            template: './src/templates/ardil-islemler.pug',
        }),
        new HtmlWebpackPlugin({
            filename: 'basket.html',
            template: './src/templates/basket/basket.pug',
        }),
        new HtmlWebpackPlugin({
            filename: 'siparislerim.html',
            template: './src/templates/siparislerim.pug',
        }),
        new HtmlWebpackPlugin({
            filename: 'bildirimlerim.html',
            template: './src/templates/bildirimlerim.pug',
        }),
        new HtmlWebpackPlugin({
            filename: 'siparis-detay.html',
            template: './src/templates/siparis-detay.pug',
        }),
        new HtmlWebpackPlugin({
            filename: 'adreslerim.html',
            template: './src/templates/adreslerim.pug',
        }),
        new HtmlWebpackPlugin({
            filename: 'uyelik-bilgilerim.html',
            template: './src/templates/uyelik-bilgilerim.pug',
        }),
        new HtmlWebpackPlugin({
            filename: 'iletisim-izinlerim.html',
            template: './src/templates/iletisim-izinlerim.pug',
        }),
        new HtmlWebpackPlugin({
            filename: 'sife-degistirme.html',
            template: './src/templates/sife-degistirme.pug',
        }),
        new HtmlWebpackPlugin({
            filename: 'sikca-sorulan-sorular.html',
            template: './src/templates/sikca-sorulan-sorular.pug',
        }),
        new HtmlWebpackPlugin({
            filename: 'islem-rehberi.html',
            template: './src/templates/islem-rehberi.pug',
        }),
        new HtmlWebpackPlugin({
            filename: 'teslimat.html',
            template: './src/templates/teslimat.pug',
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
            Widgets: path.resolve(__dirname, './src/templates/widgets'),
            Members : path.resolve(__dirname, './src/templates/view'),
            FlatPages : path.resolve(__dirname, './src/templates/flatpages'),
        }
    },
}