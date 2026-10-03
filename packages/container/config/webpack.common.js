module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // @babel/preset-react is used to transpile JSX and other React features
                        // @babel/preset-env is used to transpile modern JavaScript to be compatible with older browsers
                        // @babel/plugin-transform-runtime is used to optimize the code and reduce duplication of helper functions like async/await, generators, etc.
                        presets: ['@babel/preset-react', '@babel/preset-env',],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                }
            },
        ],
    },
};