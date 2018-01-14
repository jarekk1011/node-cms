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
module.exports = {
    target: 'node',
    node: {
        __dirname: false,
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    entry: [
        './main.js',
        './styles/app.scss'

    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: "css-loader!sass-loader",
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
            { from:  './public', to: './public'}
        ]),
        new ExtractTextPlugin({
            filename: './public/assets/styles.css',
            allChunks: true,
            // disable: true
        }),
    ]
};
if (process.env.NODE_ENV == 'production') {
    serverConfig.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    );
}
