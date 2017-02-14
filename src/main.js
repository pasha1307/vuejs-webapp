// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import VueResource from 'vue-resource'
/* eslint-disable no-new */

Vue.use(VueResource);
Vue.http.options.root = 'https://ang-http.firebaseio.com/';
Vue.filter('currency', (value) => {
  return "$" + value.toLocaleString()
});
Vue.filter('upper', (value) => value.toUpperCase());
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
