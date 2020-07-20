import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from "./store";
import "@/style/reset.scss";

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
});