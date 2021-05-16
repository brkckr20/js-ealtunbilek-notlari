// simule edicez

//cacheleme işlemi için dahil edildi.
const HtmlWebpackPlugin = require('html-webpack-plugin');
// her build almada dist klasörüne js dosyası ekleneceği için klasörün temizlenmesi için eklenen plugin
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

//merge - ortak değerleri tek klasörde toplama ve birleştirme işlemleri
const {merge} = require("webpack-merge");
const common = require('./webpack.common'); //aynı dizindeki common.js dosyası

const path = require('path');
module.exports = merge(common, {
    mode: 'production',
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