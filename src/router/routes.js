const routes = [
    { path: '/', name: '', component: resolve => require(['../views/demo/index.vue'], resolve) },
    { path: '/demo', name: 'demo', component: resolve => require(['../views/demo/index.vue'], resolve) }
];

export default routes;