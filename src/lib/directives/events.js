/**
 * Created by chaowang on 2017/12/1.
 */
const events = ['batterylow', 'batterystatus', 'keyback', 'keymenu', 'volumeup', 'volumedown', 'offline', 'online', 'pause', 'resume',
	'scrolltobottom', 'shake', 'takescreenshot', 'appidle', 'swipedown', 'swipeleft', 'swiperight', 'swipeup', 'tap', 'longpress',
	'viewappear', 'noticeclicked', 'appintent', 'smartupdatefinish', 'launchviewclicked', 'keyboardshow', 'keyboardhide', 'safeareachanged'
]

let eventDirectives = []
events.forEach(function(evt){
	eventDirectives[evt] = {
		name: 'w-' + evt,
		bind: function(el, binding){
			window.apiready = function(){
				api.addEventListener({
					name: evt
				}, function() {
					binding.value()
				})
			}
		}
	}
})
export default eventDirectives