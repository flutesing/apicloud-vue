/**
 * Created by chaowang on 2017/12/1.
 */
export default {
	name: 'w-tapmode',
	inserted: function () {
		api.parseTapmode()
	},
	update: function(){
		api.parseTapmode()
	}
}