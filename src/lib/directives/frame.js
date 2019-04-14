/**
 * Created by chaowang on 2017/12/1.
 */
import page from 'w/src/page'
export default {
	name: 'w-frame',
	inserted: function(el, binding){
		page.openFrm(binding.value)
	}
}