// simule edicez

//cacheleme işlemi için dahil edildi.
const HtmlWebpackPlugin = require('html-webpack-plugin');
// her build almada dist klasörüne js dosyası ekleneceği için klasörün temizlenmesi için eklenen plugin
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpack = require('webpack');

//const TerserPlugin = require("terser-webpack-plugin"); //console.log ları silmek için kullanılır
//merge - ortak değerleri tek klasörde toplama ve birleştirme işlemleri
const {merge} = require("webpack-merge");
const common = require('./webpack.common'); //aynı dizindeki common.js dosyası

const path = require('path');


module.exports = merge(common, {
    mode: 'production',
    output: {
      filename: "[name].[contenthash].bundle.js",
      path: path.resolve(__dirname,"dist")
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify : {
                collapseInlineTagWhitespace : true,
                collapseWhitespace : true,
                preserveLineBreaks : true,
                minifyURLs : true,
                removeComments : true,
                removeAttributeQuotes : true
            }
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash:4].css"
        }),
        new webpack.ProgressPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i, //css uzantısı ile biten bir dosya görürsen aşağıdaki komutları çalıştır.
                //test : /\.s[ac]ss$/i --> sass ve scss i tanıması için
                use: [
                    //  'style-loader', MiniCssExtractPlugin aynı işi yapacağı için yorum satırı haline getirildi.
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/i,
                use : [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    /*optimization: {
        minimize: false,
        minimizer: [
            new TerserPlugin({
                terserOption : {
                    compress : {
                        drop_console : true
                    }
                }
            })
        ],
    },*/


    /*module : {
        rules : [
            {
                test : /\.css$/i, //css uzantısı ile biten bir dosya görürsen aşağıdaki komutları çalıştır.
                use : ['style-loader','css-loader']
            }
        ]
    },*/
    /*   plugins : [
           new CleanWebpackPlugin(),
           new HtmlWebpackPlugin({
               template : './src/index.html'
           })], *///parametre verilmezse dist içerisinde kendisi default olarak bir html sayfası oluşturur.
});

//package.json üzerindekki yol düzenlendi

//çalıştırırken npm run dev