const { merge } = require('webpack-merge'); // used for merging webpack configurations
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common.js');
const packageJson = require('../package.json');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js', // use contenthash for better caching
        publicPath: '/marketing/latest/', // set the public path for production
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "marketing",
            filename: "remoteEntry.js",
            exposes: {
                './MarketingApp': './src/bootstrap',
            },
            shared: packageJson.dependencies, // share all dependencies from package.json
        })
    ]

}

module.exports = merge(commonConfig, prodConfig); // merge the common and production configurations