// simule edicez

//cacheleme işlemi için dahil edildi.
const HtmlWebpackPlugin = require('html-webpack-plugin');
// her build almada dist klasörüne js dosyası ekleneceği için klasörün temizlenmesi için eklenen plugin
/*const { CleanWebpackPlugin } = require('clean-webpack-plugin');*/

//merge - ortak değerleri tek klasörde toplama ve birleştirme işlemleri
const {merge} = require("webpack-merge");
const common = require('./webpack.common'); //aynı dizindeki common.js dosyası

const path = require('path');
module.exports = merge(common, { //merge metodu dahil edildi. ayarları yapmadan common.js dosyası ile birleştir anlamına gelir
    /*    entry : './src/index.js',
        output : {
            filename :  'main2.[contenthash].js', //cacheleme
            path : path.resolve(__dirname,'dist')
        },*/ //webpack.common.js den gelicek
    mode: 'development',
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,"dist")
    },
    module : {
        rules : [
            {
                test : /\.css$/i, //css uzantısı ile biten bir dosya görürsen aşağıdaki komutları çalıştır.
                use : ['style-loader','css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use : [
                    'style-loader',
                    'css-loader',
                    'saas-loader'
                ]
            }
        ]
    },  //commondan geleceği için yorum satırına alındı.
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })], //parametre verilmezse dist içerisinde kendisi default olarak bir html sayfası oluşturur.
});

//package.json üzerindekki yol düzenlendi

//çalıştırırken npm run dev