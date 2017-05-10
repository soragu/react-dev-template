var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, './dist');
var APP_DIR = path.resolve(__dirname, './src');
var IMAGES_DIR = path.resolve(__dirname, './images');

var config = {
    devtool: 'inline-source-map',
    entry: [
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
        APP_DIR + '/entry.js' // Your appʼs entry point
    ],
    //entry: APP_DIR + '/entry.js',
    output: {
        path: BUILD_DIR,
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    resolve: {
        enforceExtension: false,
        extensions: ['.js', '.jsx'],
        alias: {
            Library: path.resolve(__dirname, 'src/lib'),
            Fixtures: path.resolve(__dirname, 'src/fixtures'),
            Images: IMAGES_DIR,
            // logic
            Actions: path.resolve(__dirname, 'src/logic/actions'),
            Contants: path.resolve(__dirname, 'src/logic/contants'),
            Reducers:  path.resolve(__dirname, 'src/logic/reducers'),
            // ui
            Components: path.resolve(__dirname, 'src/ui/components'),
            Containers: path.resolve(__dirname, 'src/ui/containers'),
        }
        //fallback: path.join(__dirname, "node_modules")
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            include: APP_DIR,
            exclude: /\.scss$/,
            use: [{
                loader: "react-hot-loader"
            }, {
                loader: "babel-loader",
            }]
        }, {
            test: /\.scss$/,
            include: APP_DIR,
            exclude: /\.jsx?$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader", // translates CSS into CommonJS
                options: {
                    sourceMap: true,
                    modules: true,
                    camelCase: true,
                    localIdentName: "[folder]-[local]_[hash:base64:5]"
                }
            }, {
                loader: "sass-loader", // compiles Sass to CSS
                options: {
                    sourceMap: true,
                }
            }]
        }, {
            test: /\.(jpg|png)$/,
            include: IMAGES_DIR,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }, {
                loader: 'file-loader',
                options: {
                    name: "assets/[name]_[hash:8].[ext]"
                }
            }],
        }]
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 3000,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            React: 'react',
            Perf: 'react-addons-perf',
            ReactDOM: 'react-dom',
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('dev')
            }
        }),
        new HtmlWebpackPlugin({
            title: 'My App',
            template: 'src/index.tpl.ejs',
            inject: 'body',
            appRoot: 'main-container'
        })
    ]
};

module.exports = config;
