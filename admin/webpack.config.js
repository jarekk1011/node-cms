var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var UglifyJSPlugin = require('uglify-es');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


var path = require('path');


//client

var clientConfig = {
    resolve: {
        extensions: ['.ts', '.js', '.tsx']
    },
    entry: {
        admin: './app.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-bundle.js',
        chunkFilename: '[name]-chunk.js',
    },
    module: {
        loaders: [{

                test: /\.ts$/,
                loader: 'awesome-typescript-loader?configFileName=tsconfig.json',
                include: [
                    (__dirname, 'admin/'),
                ]
            }, {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
            }, {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    },
    plugins: [
        new webpack.EnvironmentPlugin(['NODE_ENV']),
        new webpack.LoaderOptionsPlugin({
            test: /\.scss$/i,
            options: {
                postcss: {
                    plugins: [autoprefixer]
                }
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            inject: 'body',
            // favicon: './static/img/favicon.ico',
            chunks: ['admin']
        }),
        // new BundleAnalyzerPlugin({
        //     analyzerMode: 'static'
        // }),

        new ExtractTextPlugin({ filename: 'css/[name].css', allChunks: true })
    ],
    devServer: {
        contentBase: false,
        compress: true,
        port: 4200
      }
};
if (process.env.NODE_ENV == 'production') {
    clientConfig.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            mangle: false
        })
    );
}

module.exports = [clientConfig];