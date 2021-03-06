import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5226e9ae = () => interopDefault(import('../pages/boten/index.vue' /* webpackChunkName: "pages/boten/index" */))
const _7a76e1ce = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _e8cb0ffe = () => interopDefault(import('../pages/handmade/index.vue' /* webpackChunkName: "pages/handmade/index" */))
const _9cdb482a = () => interopDefault(import('../pages/jachthaven/index.vue' /* webpackChunkName: "pages/jachthaven/index" */))
const _7bf86284 = () => interopDefault(import('../pages/nieuws/index.vue' /* webpackChunkName: "pages/nieuws/index" */))
const _a0ba2236 = () => interopDefault(import('../pages/occasions/index.vue' /* webpackChunkName: "pages/occasions/index" */))
const _f0836942 = () => interopDefault(import('../pages/onderdelen/index.vue' /* webpackChunkName: "pages/onderdelen/index" */))
const _d7a507ce = () => interopDefault(import('../pages/overons/index.vue' /* webpackChunkName: "pages/overons/index" */))
const _3c9101b8 = () => interopDefault(import('../pages/privacystatement/index.vue' /* webpackChunkName: "pages/privacystatement/index" */))
const _43ef0c4f = () => interopDefault(import('../pages/voorwaarden/index.vue' /* webpackChunkName: "pages/voorwaarden/index" */))
const _0111ff46 = () => interopDefault(import('../pages/boten/_bootpostId/index.vue' /* webpackChunkName: "pages/boten/_bootpostId/index" */))
const _c1b918a2 = () => interopDefault(import('../pages/nieuws/_postId/index.vue' /* webpackChunkName: "pages/nieuws/_postId/index" */))
const _3b8de770 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/boten",
    component: _5226e9ae,
    name: "boten"
  }, {
    path: "/contact",
    component: _7a76e1ce,
    name: "contact"
  }, {
    path: "/handmade",
    component: _e8cb0ffe,
    name: "handmade"
  }, {
    path: "/jachthaven",
    component: _9cdb482a,
    name: "jachthaven"
  }, {
    path: "/nieuws",
    component: _7bf86284,
    name: "nieuws"
  }, {
    path: "/occasions",
    component: _a0ba2236,
    name: "occasions"
  }, {
    path: "/onderdelen",
    component: _f0836942,
    name: "onderdelen"
  }, {
    path: "/overons",
    component: _d7a507ce,
    name: "overons"
  }, {
    path: "/privacystatement",
    component: _3c9101b8,
    name: "privacystatement"
  }, {
    path: "/voorwaarden",
    component: _43ef0c4f,
    name: "voorwaarden"
  }, {
    path: "/boten/:bootpostId",
    component: _0111ff46,
    name: "boten-bootpostId"
  }, {
    path: "/nieuws/:postId",
    component: _c1b918a2,
    name: "nieuws-postId"
  }, {
    path: "/",
    component: _3b8de770,
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
