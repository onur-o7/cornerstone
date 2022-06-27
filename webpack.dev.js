const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
    devtool: 'inline-source-map',
    mode: 'development',
    performance: {
        hints: false,
    },
});
