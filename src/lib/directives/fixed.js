/**
 * Created by chaowang on 2017/12/1.
 */
import { isAc } from 'w/src/test'
import q from 'w/src/query'

export default {
	name: 'w-fixed',
	bind: function(el, binding){
		el.style.position = 'fixed'
		let pos = binding.arg || 'top'
		let val = binding.value || 0
		el.style[pos] = val + 'px'
		el.style.zIndex = 100000
		if (binding.modifiers.pad === true){
			let cls = 'appbar-add-base'
			if (isAC()) cls = 'appbar-add-fix'
			let hStr = '<div class="' + cls + '"></div>'
			q(hStr).insertBefore(el)
		}
	}
}