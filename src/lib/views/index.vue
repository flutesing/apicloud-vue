<template>
  <div id="app">
    <h2>come from lib views</h2>
    <img alt="Vue logo" src="~@assets/logo.png">

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@components/HelloWorld.vue'
import apiready from '@lib/ready'
export default {
    name: 'app',
    components: {
        HelloWorld
    },

    async created(){

        var api = await apiready();

        api.ajax({
            url: 'http://192.168.2.40:8888/test/test/server',
            method: 'post',
            data: {
                values: {
                    name: 'haha'
                }
            }
        }, function(ret, err) {
            if (ret) {
                api.alert({ msg: JSON.stringify(ret) });
            } else {
                api.alert({ msg: JSON.stringify(err) });
            }
        });

        apiready.then(function(api) {
            api.ajax({
                url: 'http://192.168.2.40:8888/test/test/server',
                method: 'post',
                data: {
                    values: {
                        name: 'haha'
                    }
                }
            }, function(ret, err) {
                if (ret) {
                    api.alert({ msg: JSON.stringify(ret) });
                } else {
                    api.alert({ msg: JSON.stringify(err) });
                }
            });
        })


    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
