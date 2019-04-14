const api = window.api

module.exports = {
    install: function (Vue) {
        Object.defineProperties(Vue.prototype, {
            $electron: {
                get () {
                    return api
                },
            },
        })
    },
}