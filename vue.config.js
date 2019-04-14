//已简化
var path = require("path");
module.exports = {
    entry: {
        index: "./src/entry/index",
        pageB: "./src/entry/index2"
    },
    output: {
        path: path.join(__dirname, "js"),
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    }
}