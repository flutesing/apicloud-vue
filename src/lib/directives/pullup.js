/**
 * Created by chaowang on 2017/12/1.
 */
export default {
	name: 'w-pullup',
	bind: function(el, binding){
		api.addEventListener({
			name: 'scrolltobottom'
		}, function(ret, err) {
			if (binding.value) {
				binding.value.apply(this, [ret, err])
			}
		})
	}
}
