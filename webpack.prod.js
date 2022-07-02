const webpack = require('webpack'),
      commonConfig = require('./webpack.common.js');

const { merge } = require('webpack-merge');

module.exports = merge(commonConfig, {
    devtool: 'source-map',
    mode: 'production',
    optimization: {
        noEmitOnErrors: true,
    },
});
