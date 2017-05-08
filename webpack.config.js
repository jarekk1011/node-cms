var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
// let BabiliPlugin = require("babili-webpack-plugin");
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
            { test: /\.json$/, loader: "json-loader" }
        ]
    },
    devtool: 'sourcemap',
    externals: [nodeExternals()],
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     // compress: env.production // compress only in production build
        // })
    ]
};


//client

var clientConfig = {
    resolve: {
        extensions: ['.ts', '.js', '.tsx']
    },
    entry: {
        admin: './admin/app.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-bundle.js',
        chunkFilename: '[name]-chunk.js',
    },
    module: {
        loaders: [
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: 'babel-loader',
            //     options: {
            //         presets: [
            //             ['es2015', { modules: false }]
            //         ]
            //     }
            // },
            {
                // TS LOADER
                // Reference: https://github.com/s-panferov/awesome-typescript-loader
                // Transpile .ts files using awesome-typescript-loader
                test: /\.ts$/,
                loader: 'awesome-typescript-loader?configFileName=tsconfig.json',
                // options: {
                //     tsconfig: (__dirname, 'tsconfig.json')
                // },
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
                // ASSET LOADER
                // Reference: https://github.com/webpack/file-loader
                // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
                // Rename the file using the asset hash
                // Pass along the updated reference to your code
                // You can add here any file extension you want to get copied to your output
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
            }, {
                // HTML LOADER
                // Reference: https://github.com/webpack/raw-loader
                // Allow loading html through js
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    },
    plugins: [
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
                // other ng-annotate options here
            }),
            new HtmlWebpackPlugin({
                filename: 'admin.html',
                template: './admin/index.html',
                inject: 'body',
                // favicon: './static/img/favicon.ico',
                chunks: ['admin']
            }),
            // new webpack.optimize.UglifyJsPlugin({
            //     mangle: false
            // }),
            // new BundleAnalyzerPlugin({
            //     analyzerMode: 'static'
            // }),

            // new webpack.optimize.CommonsChunkPlugin({
            //     name: 'admin-build',
            //     minChunks(module, count) {
            //         var context = module.context;
            //         return context && (context.indexOf('node_modules\\angular\\') >= 0);
            //     },
            // }),

            new ExtractTextPlugin({ filename: 'css/[name].css', allChunks: true })

            // Copy assets from the public folder
            // Reference: https://github.com/kevlened/copy-webpack-plugin
            // new CopyWebpackPlugin([{
            //   from: __dirname + '/assets/img',
            // }])
        ]
        //…
};

module.exports = [serverConfig, clientConfig];