export default new Promise(function(resolve) {
    if (window.api) {
        resolve(window.api);
    } else {
        window.apiready = function() {
            resolve(window.api);
        };
    }
});

