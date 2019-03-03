const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const historyApiFallback = require('connect-history-api-fallback');
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const cssNano = require('cssnano');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = (env) => {
    // eslint-disable-next-line no-console
    console.log(env);
    const isProduction = env === 'production';
    const BrowserSync = new BrowserSyncPlugin({
        port: 3000,
        server: {
            baseDir: 'build',
            middleware: [historyApiFallback()],
        },
    });
    return {
        mode: env,
        entry: ['@babel/polyfill', './src/app.js'],
        output: {
            path: path.join(__dirname, 'build'),
            filename: 'scripts.min.js',
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: [/node_modules/, /build/],
                },
                {
                    test: /(\.css|\.scss|\.sass)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        }, {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [
                                    cssNano,
                                    autoprefixer,
                                ],
                                sourceMap: true,
                            },
                        }, {
                            loader: 'sass-loader',
                            options: {
                                includePaths: [path.resolve(__dirname, 'src', 'scss')],
                                sourceMap: true,
                            },
                        },
                    ],
                },
            ],
        },
        watch: !isProduction,
        plugins: !isProduction
            ? [
                BrowserSync,
                new MiniCssExtractPlugin({
                    filename: 'style.min.css',
                }),
                new HtmlWebpackPlugin({
                    template: 'src/index.ejs',
                    inject: 'body',
                }),
                new CopyWebpackPlugin([
                    {
                        from: 'src/images',
                        to: 'images',
                    },
                ]),
            ]
            : [
                new MiniCssExtractPlugin({
                    filename: 'style.min.css',
                }),
                new HtmlWebpackPlugin({
                    template: 'src/index.ejs',
                    inject: 'body',
                }),
                new CopyWebpackPlugin([
                    {
                        from: 'src/images',
                        to: 'images',
                    },
                ]),
            ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            historyApiFallback: true,
        },

    };
};
