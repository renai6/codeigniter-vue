const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'assets/js')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test:/\.js/,
        exclude: /node_modules/,
        use: {
          loader:'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
    ]
  },
  resolve:{
    alias: {
      Store: path.resolve(__dirname, 'src/js/store'),
      Components:path.resolve(__dirname,'src/js/components/'), // 'vue/dist/vue.common.js' for webpack 1
    },
    extensions: [ '.js', '.vue', '.json' ],
    
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}