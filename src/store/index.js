import Vue from 'vue'
import Vuex from 'vuex'
import computerModule from './computerModule'
import mobileModule from './mobileModule'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules:{
       computer: computerModule,
       mobile:mobileModule
    },
})
