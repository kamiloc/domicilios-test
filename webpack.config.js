//'use strict';

const webpack = require('webpack');
const plugins = [];
const TRAVIS = process.env.TRAVIS ? JSON.parse(process.env.TRAVIS) : false;

if (TRAVIS) {
  console.log('TRAVIS mode (will fail on error)');
  plugins.push(new webpack.NoErrorsPlugin());
}


module.exports = {
    bail: TRAVIS,

    entry: __dirname + '/src/js/main.jsx',

    output: {
        path: __dirname + '/public',
        filename: 'index.js'
    },

    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};
