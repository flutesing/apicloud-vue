/**
 * Created by chaowang on 2017/12/1.
 */
import Promise from 'w/src/promise'

export default {
	name: 'pulldown',
	bind: function (el, binding) {
		let callback
		let params = {
			visible: true,
			bgColor: '#F0F0F0',
			textDown: '下拉刷新...',
			textUp: '松开刷新...',
			showTime: true
		}
		if (typeof binding.value === 'object') {
			callback = binding.value.callback
			params = Object.assign(params, binding.value)
		} else {
			callback = binding.value
		}
		api.setRefreshHeaderInfo(params, function(ret, err) {
			if (callback) {
				Promise.try(() => {
					return new Promise((resolve, reject) => {
						callback.apply(this, [resolve, reject, ret, err])
					})
				}).then(() => api.refreshHeaderLoadDone())
			}
		})
		api.refreshHeaderLoading()
	}
}