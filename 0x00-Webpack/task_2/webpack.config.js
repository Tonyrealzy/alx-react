const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
    ],
    performance: {
        hints: false
    },
};