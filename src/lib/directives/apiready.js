/**
 * Created by chaowang on 2017/12/1.
 */
export default {
	name: 'w-apiready',
	bind: function(el, binding){
		window.apiready = function(){
			binding.value()
		}
	}
}