//已简化
const path  = require('path');
const glob  = require('glob');
const fs    = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const default_template = './src/public/index.html';
const defined_template = [

];
const getPages = (() => {
    const [
        globEntry,
        pages,
        pagesSet
    ] = [
        ['./src/pages/entry/**/**.js', 'entry'], // 入口脚本正则
        Object.create(null),
        new Set()
    ]

    const getMultiPageConf = (globRegex, keyName) => {
        let [fileList, modName, tplName, filename, tempArr] = [glob.sync(globRegex), null, null, null, []]
        if (fileList.length !== 0) {
            for (let entry of fileList) {
                modName = entry.replace(path.extname(entry), '');
                tplName = entry.replace(path.extname(entry), '.html');
                tempArr = modName.split('/').splice(4);
                modName = 'html/' + tempArr.join('/');
                filename = modName + '.html';
                // var modName2 = 'html/' + tempArr.join('/') + '.html';
                if (! fs.existsSync(tplName)) {
                    if (fs.existsSync(defined_template[modName])) {
                        tplName = defined_template[modName];
                    } else {
                        tplName = default_template;
                    }
                }
                if (pagesSet.has(modName)) {
                    Object.assign(pages[modName], { [keyName]: entry, 'template': tplName, filename: filename })
                } else {
                    Reflect.set(pages, modName, { [keyName]: entry,  'template': tplName,  filename: filename }) && pagesSet.add(modName)
                }
            }
            return true
        } else {
            throw new Error('获取多页入口发生错误');
        }
    }
    getMultiPageConf(...globEntry);
    try {
        while (getMultiPageConf(...globEntry)) return pages
    } catch (err) {
        console.log(err)
    }
})();

console.log(getPages);

const outputDir = '/Users/flutesing/Coding/apicloud/test';

module.exports = {
    pages : getPages,

    chainWebpack: config => {

        config.resolve.alias
        .set("@@",          path.resolve(__dirname, 'src'))
        .set('@entry',      path.resolve(__dirname, 'src/pages/entry'))
        .set('@page',       path.resolve(__dirname, 'src/pages/page'))
        .set('@router',     path.resolve(__dirname, 'src/pages/router'))
        .set('@assets',     path.resolve(__dirname, 'src/assets'))
        .set('@components', path.resolve(__dirname, 'src/lib/components'))
        .set('@config',     path.resolve(__dirname, 'src/config'))
        .set('@lib',        path.resolve(__dirname, 'src/lib'))
        .set('@public',        path.resolve(__dirname, 'src/public'))
        .end();

        config.plugin('copy')
        .use(CopyWebpackPlugin,
            [[
                {from: path.resolve(__dirname, 'src/config.xml'), to: outputDir},
                {from: path.resolve(__dirname, 'src/public/favicon.ico'), to: outputDir}
            ]])
        .end();

    },

    baseUrl: undefined,
    outputDir: outputDir,
    assetsDir: undefined,
    runtimeCompiler: undefined,
    productionSourceMap: undefined,
    parallel: undefined,
    css: undefined
};

