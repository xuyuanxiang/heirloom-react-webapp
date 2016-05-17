var webpack = require('webpack');
var pkg = require('./package.json');
var util = require('util');

module.exports = {
    entry: './src/index.js',

    output: {
        path: './dist/' + pkg.version,
        filename: util.format('%s.[hash].js', pkg.name),
        publicPath: '/'
    },

    plugins: process.env.NODE_ENV === 'production' ? [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        })
    ] : [],

    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react'}
        ]
    }
};