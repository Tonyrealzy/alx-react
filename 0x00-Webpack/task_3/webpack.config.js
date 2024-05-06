const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { split } = require('lodash');


module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        header: 'modules/header/header.js',
        body: 'modules/body/body.js',
        footer: 'modules/footer/footer.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            minimizerOptions: {
                plugins: [
                    ['imagemin-webp', { quality: 75 }]
                ],
            }
        }),
        new ImageMinimizerPlugin({
            minimizerOptions: {
              plugins: [
                ['optipng', { optimizationLevel: 5 }],
                ['mozjpeg', { progressive: true, quality: 80 }],
                ['gifsicle', { interlaced: true, optimizationLevel: 3 }],
                ['svgo', { plugins: [{ removeViewBox: false }] }],
              ],
            },
          }),
        new HtmlWebpackPlugin({
            title: 'Holberton Dashboard',
            template: 'src/index.html',
        }),
        new CleanWebpackPlugin(),
    ],
    performance: {
        hints: false
    },
    devServer: {
        contentBase: './public',
        port: 8564,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    }
};