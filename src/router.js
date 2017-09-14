const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/grid',
        meta: {
            title: 'Grid'
        },
        component: (resolve) => require(['./views/grid.vue'], resolve)
    },
    {
        path: '/foo',
        name: 'foo',
        meta: {
            title: 'Foo'
        },
        component: (resolve) => require(['./views/foo.vue'], resolve)
    },
    {
        path: '/bar',
        name: 'bar',
        meta: {
            title: 'Bar'
        },
        component: (resolve) => require(['./views/bar.vue'], resolve)
    }
];
export default routers;