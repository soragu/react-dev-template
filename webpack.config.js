var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin'); // style package
var HtmlWebpackPlugin = require('html-webpack-plugin'); // index.html creator

var BUILD_DIR = path.resolve(__dirname, './dist');
var APP_DIR = path.resolve(__dirname, './src');
var IMAGES_DIR = path.resolve(__dirname, './images');

var config = {
    entry: {
        app: APP_DIR + '/entry.js',
        vendor: ['react', 'react-dom', 'redux', 'react-redux']
    },
    output: {
        path: BUILD_DIR,
        publicPath: './',
        filename: 'bundle.js'
    },
    resolve: {
        // root: '',
        enforceExtension: false,
        extensions: ['.js', '.jsx'], // append file extension name
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
    },
    // externals: {
    //     //Use external version of React
    //     "react": "React",
    //     "react-dom": "ReactDom"
    // },
    module: {
        rules: [{
            test: /\.jsx?$/,
            include: APP_DIR,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ['react', 'es2015']
                }
            }]
        }, {
            test: /\.scss$/,
            include: APP_DIR,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader", // creates style nodes from JS strings
                use: [{
                    loader: "css-loader", // translates CSS into CommonJS
                    query: {
                        modules: true,
                        localIdentName: "[local]-[name]"
                    }
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            })
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
                    name: "assets/[name]-[hash:8].[ext]"
                }
            }],
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.ProvidePlugin({
            React: "react"
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js'
        }),
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            title: 'My App',
            template: 'src/index.tpl.ejs',
            inject: 'body',
            appRoot: 'main-container'
        })
    ]
};

module.exports = config;
