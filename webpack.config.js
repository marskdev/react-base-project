const path = require('path');
//Instancia del plugin instalado
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


//   COnfiguracion de los elementos que vamos a necesitar
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(
      __dirname, //Detecta el directorio en el que nos encontramos
      'dist'), // Directorio donde guardaremos los archivos
      filename: 'bundle.js'  // Nombre del archivo principal
  },
  //resolver las extenciones que vamos a utilizar en nuestro proyecto
  resolve: {
    extensions: ['.js', '.jsx']
  },
  //reglas necesarias para el proyecto
  module: {
    rules: [  
      {  //identificacion de nuestros archivos js y jsx
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      { // identificamos archivos html
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }

        ]
      },
      { //identificamos archivos scss y css
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin ({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      //nombre del archivo resultante
      filename: 'assets/[name].css'
    }),
  ]
};