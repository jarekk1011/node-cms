var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var UglifyJSPlugin = require('uglify-js');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


var path = require('path');
var serverConfig = {
    target: 'node',
    resolve: {
        extensions: ['.js', '.ts']
    },
    entry: {
        server: './server/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['es2015']
                    ]
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    loader: "css-loader!sass-loader",
                })
            },
        ]
    },
    devtool: 'sourcemap',
    externals: [nodeExternals()],
    plugins: [
        new webpack.EnvironmentPlugin(['NODE_ENV']),
        new webpack.LoaderOptionsPlugin({
            test: /\.scss$/i,
            options: {
                postcss: {
                    plugins: [autoprefixer]
                }
            },
        }),
        new CopyWebpackPlugin([
            { from: '.env.config' },
            { from: 'service_account.json' },
            { from: 'package.json' },
            { from: 'server/public/templates', to: 'public/templates/' },
            { from: 'server/public/assets/img', to: 'public/assets/img/' },
        ]),
        new ExtractTextPlugin({ filename: 'public/assets/css/style.css' }),
    ]
};
if (process.env.NODE_ENV == 'production') {
    serverConfig.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    );
}


//client

var clientConfig = {
    resolve: {
        extensions: ['.ts', '.js', '.tsx']
    },
    entry: {
        admin: './admin/app.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist/public'),
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
        new ngAnnotatePlugin({
            add: true,
        }),
        new HtmlWebpackPlugin({
            filename: 'admin.html',
            template: './admin/index.html',
            inject: 'body',
            // favicon: './static/img/favicon.ico',
            chunks: ['admin']
        }),
        // new BundleAnalyzerPlugin({
        //     analyzerMode: 'static'
        // }),

        new ExtractTextPlugin({ filename: 'css/[name].css', allChunks: true })
    ]
};
if (process.env.NODE_ENV == 'production') {
    clientConfig.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            mangle: false
        })
    );
}

module.exports = [serverConfig, clientConfig];