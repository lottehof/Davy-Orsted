import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7fba86b0 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _730a9143 = () => interopDefault(import('../pages/hand-made/index.vue' /* webpackChunkName: "pages/hand-made/index" */))
const _4509a8f4 = () => interopDefault(import('../pages/jachthaven/index.vue' /* webpackChunkName: "pages/jachthaven/index" */))
const _35acc7e6 = () => interopDefault(import('../pages/nieuws/index.vue' /* webpackChunkName: "pages/nieuws/index" */))
const _512373b0 = () => interopDefault(import('../pages/overons/index.vue' /* webpackChunkName: "pages/overons/index" */))
const _46a9d790 = () => interopDefault(import('../pages/nieuws/_postId/index.vue' /* webpackChunkName: "pages/nieuws/_postId/index" */))
const _5ba0ea42 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _7fba86b0,
    name: "contact"
  }, {
    path: "/hand-made",
    component: _730a9143,
    name: "hand-made"
  }, {
    path: "/jachthaven",
    component: _4509a8f4,
    name: "jachthaven"
  }, {
    path: "/nieuws",
    component: _35acc7e6,
    name: "nieuws"
  }, {
    path: "/overons",
    component: _512373b0,
    name: "overons"
  }, {
    path: "/nieuws/:postId",
    component: _46a9d790,
    name: "nieuws-postId"
  }, {
    path: "/",
    component: _5ba0ea42,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
