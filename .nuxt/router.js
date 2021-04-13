import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2ff60722 = () => interopDefault(import('../pages/aanbod/index.vue' /* webpackChunkName: "pages/aanbod/index" */))
const _094d0700 = () => interopDefault(import('../pages/boten/index.vue' /* webpackChunkName: "pages/boten/index" */))
const _7fba86b0 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _6d63734a = () => interopDefault(import('../pages/handmade/index.vue' /* webpackChunkName: "pages/handmade/index" */))
const _4509a8f4 = () => interopDefault(import('../pages/jachthaven/index.vue' /* webpackChunkName: "pages/jachthaven/index" */))
const _35acc7e6 = () => interopDefault(import('../pages/nieuws/index.vue' /* webpackChunkName: "pages/nieuws/index" */))
const _06f95cbc = () => interopDefault(import('../pages/occasions/index.vue' /* webpackChunkName: "pages/occasions/index" */))
const _26facc88 = () => interopDefault(import('../pages/Onderdelen/index.vue' /* webpackChunkName: "pages/Onderdelen/index" */))
const _512373b0 = () => interopDefault(import('../pages/overons/index.vue' /* webpackChunkName: "pages/overons/index" */))
const _4b24a61d = () => interopDefault(import('../pages/boten/_bootpostId/index.vue' /* webpackChunkName: "pages/boten/_bootpostId/index" */))
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
    path: "/aanbod",
    component: _2ff60722,
    name: "aanbod"
  }, {
    path: "/boten",
    component: _094d0700,
    name: "boten"
  }, {
    path: "/contact",
    component: _7fba86b0,
    name: "contact"
  }, {
    path: "/handmade",
    component: _6d63734a,
    name: "handmade"
  }, {
    path: "/jachthaven",
    component: _4509a8f4,
    name: "jachthaven"
  }, {
    path: "/nieuws",
    component: _35acc7e6,
    name: "nieuws"
  }, {
    path: "/occasions",
    component: _06f95cbc,
    name: "occasions"
  }, {
    path: "/Onderdelen",
    component: _26facc88,
    name: "Onderdelen"
  }, {
    path: "/overons",
    component: _512373b0,
    name: "overons"
  }, {
    path: "/boten/:bootpostId",
    component: _4b24a61d,
    name: "boten-bootpostId"
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
