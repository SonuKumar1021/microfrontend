const { merge } = require('webpack-merge'); // used for merging webpack configurations
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common.js');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html', // fallback to index.html for SPA routing
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                marketing: "marketing@http://localhost:8081/remoteEntry.js",
            },
            //shared: ["react", "react-dom"], // share react and react-dom dependencies
            shared: packageJson.dependencies, // share all dependencies from package.json
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html', // specify the HTML template to use
        }),
    ],
}

module.exports = merge(commonConfig, devConfig); // merge the common and development configurations