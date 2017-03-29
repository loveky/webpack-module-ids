const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
  	'app': './index.js',
  	'vender': ['left-pad', 'jsonp']
  },
  output: {
    filename: '[name].[chunkHash].js',
    path: path.resolve(__dirname, 'build')
  },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            }
        ]
    },
  plugins:[
         new webpack.optimize.CommonsChunkPlugin({
            name: ['vender', 'manifest'],
            minChunks: Infinity,
        }),
        new webpack.HashedModuleIdsPlugin()
  ]
};
