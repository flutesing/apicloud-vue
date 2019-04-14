/**
 * Created by chaowang on 2017/12/1.
 */
export default {
	name: 'w-imgcache',
	bind: function(el, binding){
		window.apiready = function(){
			api.imageCache({
				url: binding.value
			}, function(ret) {
				el.src = ret.url
			})
		}
	}
}