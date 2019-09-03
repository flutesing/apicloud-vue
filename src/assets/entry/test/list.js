import Vue from 'vue'
import App from '@page/test/list.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')