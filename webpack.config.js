'use strict';

module.exports = {

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
    }
};
