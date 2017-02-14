import Vue from 'vue'
import Vuex from 'vuex'
// import stocks from './modules/stocks'
// import portfolio from './modules/portfolio'
// import one from './modules/one'
// import two from './modules/two'
import stocks from './modules/appstocks'
import portfolio from './modules/appfolio'
import * as actions from './actions'

Vue.use(Vuex);

export default  new Vuex.Store({
  actions,
  modules: {
      stocks,
      portfolio
  }
})