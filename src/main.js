import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter);
import routes from './assets/router/router.config.js';

//     <!--移动端导航-->
// import './assets/js/jquery.mmenu.all.min.js';
// <!--Include Js-->

// <!--slick-->
// import './assets/js/slick.min.js';
// import './assets/js/wow.js';
//
// import './assets/js/jquery.placeholder.min.js';
// import './assets/js/place.js';
// import './assets/js/public.js';

import './assets/css/slick.css'
    import './assets/css/bootstrap.css'
    import './assets/css/jquery.mmenu.all.css'
    import './assets/css/style.css'
    import './assets/css/animate.css'
    // <!--<script src="//cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>-->
// import $ from './assets/js/jquery.min';
const router = new VueRouter(routes);
import axios from 'axios';
Vue.prototype.$http = axios;
import store from './assets/store'

new Vue({
  el: '#app',
  render: h => h(App),
    router,store
})
