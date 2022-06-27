const webpack = require('webpack');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
    devtool: 'source-map',
    mode: 'production',
    optimization: {
        noEmitOnErrors: true,
        concatenateModules: true,
        chunkIds: 'total-size',
        minimize: true,
        moduleIds: 'deterministic',
        mergeDuplicateChunks: true,
        minimizer: [new TerserPlugin(
            {
                extractComments: 'all',
                terserOptions: {
                    mangle: true, // Note `mangle.properties` is `false` by default.
                    module: false,
                    ie8: false,
                    compress: true,
                    sourceMap: false,
                },
            },
        )],
    },
});
