//已简化
const path  = require('path');
const glob  = require('glob');
const fs    = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const globurl = 'src/pages/*';
const default_template = 'src/public/index.html';
const default_entry = 'src/public/index.js';


function getEntries(url) {
    let entrys = {}
    glob.sync(url).forEach(item => {
        let urlArr = item.split('/').splice(-1)
        let name = urlArr[0]
        let entry = fs.existsSync('src/pages/' + name + '/' + 'index.js') ? 'src/pages/' + name + '/' + 'index.js' : default_entry;
        let tpl = fs.existsSync('src/pages/' + name + '/' + 'index.html') ? 'src/pages/' + name + '/' + 'index.html' : default_template;
        entrys[name] = {
            entry: entry,
            template: tpl,
            filename: name + '.html',
            title: 'pages-' + name
        }
    })
    return entrys
}

function getModules(url) {
    let modules = {}
    glob.sync(url).forEach(item => {
        let urlArr = item.split('/').splice(-1)
            modules[urlArr[0]] = item;
    })
    return modules
}



let pages = getEntries(globurl)
let modules = getModules(globurl)

console.log(pages)
console.log(modules)

const outputDir = '/Users/flutesing/Coding/apicloud/test';

module.exports = {
    pages : pages,

    chainWebpack: config => {
        Object.keys(modules).forEach((key) => {
            config.resolve.alias.set("$"+ key, path.resolve(__dirname, modules[key]))
        })

        config.resolve.alias
        .set("@@",          path.resolve(__dirname, 'src'))
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

