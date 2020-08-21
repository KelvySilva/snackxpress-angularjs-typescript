// const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode:"development",
    entry: './src/app.ts',   
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [
                    path.resolve(__dirname, 'src')
                ]
            },
            {
                test: /\.html$/,
                use: 'html-loader',
                include: [
                    path.resolve(__dirname, 'src')
                ]
            }
        ]
    },
    output: {
        publicPath: 'public',
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.ts', '.js'],
    }
} 