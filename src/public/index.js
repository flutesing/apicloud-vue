import Vue from 'vue'
import App from '@lib/views/index.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')