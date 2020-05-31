import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/index',
    component: () => import(/* webpackChunkName: "home" */ '../pages/home.vue'),
    children: [{
      path: "/index",
      name: 'index',
      component: () => import(/* webpackChunkName: "index" */ '../pages/index.vue'),
    }, {
      path: "/product/:id",
      name: 'product',
      component: () => import(/* webpackChunkName: "product" */ '../pages/product.vue'),
    }, {
      path: "/detail/:id",
      name: 'detail',
      component: () => import(/* webpackChunkName: "detail" */ '../pages/detail.vue'),
    }]
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '../pages/cart.vue'),
  },
  {
    path: '/order',
    name: 'order',
    component: () => import(/* webpackChunkName: "order" */ '../pages/order.vue'),
    children: [
      {
        path: "list",
        name: 'order-list',
        component: () => import(/* webpackChunkName: "orderList" */ '../pages/orderList.vue'),
      }, {
        path: "confirm",
        name: 'order-confirm',
        component: () => import(/* webpackChunkName: "orderConfirm" */ '../pages/orderConfirm.vue'),
      }, {
        path: "pay",
        name: 'order-pay',
        component: () => import(/* webpackChunkName: "orderPay" */ '../pages/orderPay.vue'),
      }, {
        path: "alipay",
        name: 'alipayy',
        component: () => import(/* webpackChunkName: "orderPay" */ '../pages/alipay.vue'),
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
