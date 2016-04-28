var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    //插件项;
    //plugins: [commonsPlugin],
    //页面入口文件配置;
    entry: {
        css : [
            'webpack/hot/dev-develop',
            './src/assets/less/css.less',
            './src/assets/js/main.js'
        ]
    },
    //入口文件输出配置;
    output: {
        path: path.resolve(__dirname, "../blog/client/Public"),
        publicPath:'/Public/',
        filename: '[name].js'
    },
    module: {
        //加载器配置;
        loaders: [
            //.css 文件使用 style-loader 和 css-loader 来处理;
            //{ test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('css') },
            //.js 文件使用 jsx-loader 来编译处理;
            //{ test: /\.js$/, loader: 'jsx-loader?harmony' },
            //.less 文件使用 style-loader、css-loader 和 sass-loader 来编译处理;
            //{ test: /\.less$/, loader: 'style!css!less'},
            { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css!less')},
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64;
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    plugins:  [
        new ExtractTextPlugin("[name].css"),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]

    //其它解决方案配置;
    //resolve: {
    //    root: 'E:/github/flux-example/src', //绝对路径;
    //    extensions: ['', '.js', '.json', '.scss'],
    //    alias: {
    //        AppStore : 'js/stores/AppStores.js',
    //        ActionType : 'js/actions/ActionType.js',
    //        AppAction : 'js/actions/AppAction.js'
    //    }
    //}
};