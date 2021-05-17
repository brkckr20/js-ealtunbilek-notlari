// simule edicez

// cacheleme işlemi için dahil edildi.
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// her build almada dist klasörüne js dosyası ekleneceği için klasörün temizlenmesi için eklenen plugin
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');

// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const path = require('path');
module.exports = {
    entry: './src/index.js',
    /*output: {
        filename: 'main2.[contenthash].js', //cacheleme
        path: path.resolve(__dirname, 'dist')
    },
        her dosyaya özel yazılacağı için buradan silindi.
    */
    module: {
        rules: [
          //  {
          //      test: /\.css$/i, //css uzantısı ile biten bir dosya görürsen aşağıdaki komutları çalıştır.
          //      //test : /\.s[ac]ss$/i --> sass ve scss i tanıması için
          //      use: [
          //        //  'style-loader', MiniCssExtractPlugin aynı işi yapacağı için yorum satırı haline getirildi.
          //          MiniCssExtractPlugin.loader,
          //          'css-loader'
          //      ]
          //  }, modların kendine özel ayarlanması için ayarlandı
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[hash:4].[ext]',
                    outputPath: 'images',
                    publicPath: 'images',
                },
            }
        ]
    },
    /*plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash:4].css"
        })
    ],
    development ve production da hangisi lazım olacaksa onların kullanılması için bu ortak dosyada yorum haline getirildi.
    */
    //parametre verilmezse dist içerisinde kendisi default olarak bir html sayfası oluşturur.
};

//package.json üzerindekki yol düzenlendi

//çalıştırırken npm run dev