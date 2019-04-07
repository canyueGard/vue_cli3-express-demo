module.exports = {
    // index.html 打包后使用相对路径
    publicPath: './',
    // 打包路径
    outputDir: './src/server/public-client',
    // 静态资源
    // assetsDir: 'public',
    // index.html输出路径
    // indexPath: './index.html',
    /*
     * webpack 配置
     */
    chainWebpack: config => {
        // 修改index.html 的默认路径
        config.plugin('html').tap(args => {
            args[0].template = './src/client/public/index.html';
            return args;
        });
        // config.assetsPublicPath = '..'
    }
};
