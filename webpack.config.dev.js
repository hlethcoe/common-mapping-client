import webpack from 'webpack';
import path from 'path';

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('development'),
    __DEV__: true
};

export default {
    debug: true,
    devtool: 'cheap-module-eval-source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
    noInfo: true, // set to false to see a list of every file being bundled.
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './src/index'
    ],
    target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
    output: {
        path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js',
        sourcePrefix: ''
    },
    plugins: [
        new webpack.DefinePlugin(GLOBALS), //Tells React to build in prod mode. https://facebook.github.io/react/downloads.htmlnew webpack.HotModuleReplacementPlugin());
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.jsx', '.scss', '.css', '.js', '.json']
    },
    module: {
        unknownContextCritical: false,
        loaders: [
            { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel', 'eslint'], exclude: path.join(__dirname, 'src/lib') },
            { test: /Cesium\.js$/, loader: 'script' },
            { test: /\.(jpe?g|png|gif|svg)$/i, loaders: ['file'] },
            { test: /(\.css|\.scss)$/, exclude: path.join(__dirname, 'node_modules/react-toolbox'), loaders: ['style', 'css?sourceMap', 'sass?sourceMap'] },
            { test: /(\.css|\.scss)$/, include: path.join(__dirname, 'node_modules/react-toolbox'), loaders: ['style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass?sourceMap!toolbox'] },
            { test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/, loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]' }
        ]
    },
    toolbox: { theme: path.join(__dirname, 'src/styles/material_ui_theme.scss') }
};