/**
 * Created by chaowang on 2017/12/1.
 */
import apiready from './directive/apiready'
import events from './directive/events'
import fixed from './directive/fixed'
import frame from './directive/frame'
import imgcache from './directive/imgcache'
import pulldown from './directive/pulldown'
import pullup from './directive/pullup'
import tapmode from './directive/tapmode'

const directive = {
  apiready,
  ...events,
  fixed,
  frame,
  imgcache,
  pulldown,
  pullup,
  tapmode
}

const install = function(Vue, opts = {}) {
  Object.keys(directive).forEach(key => {
    Vue.directive(directive[key].name, directive[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {install}