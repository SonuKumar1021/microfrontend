const { merge } = require('webpack-merge'); // used for merging webpack configurations
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common.js');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN; // need to add in gihub actions secrets

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js', // use contenthash for better caching
        publicPath: '/container/latest/', // set the public path for production
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
            },
            shared: packageJson.dependencies, // share all dependencies from package.json
        }),
    ],
}

module.exports = merge(commonConfig, prodConfig); // merge the common and production configurations