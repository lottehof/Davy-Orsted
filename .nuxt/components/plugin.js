import Vue from 'vue'

const components = {
  Post: () => import('../../components/Post.vue' /* webpackChunkName: "components/post" */).then(c => c.default || c),
  Slide: () => import('../../components/Slide.vue' /* webpackChunkName: "components/slide" */).then(c => c.default || c),
  BlogPostPreview: () => import('../../components/Blog/PostPreview.vue' /* webpackChunkName: "components/blog-post-preview" */).then(c => c.default || c),
  Footer: () => import('../../components/Footer/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c),
  FooterMenu: () => import('../../components/Footer/FooterMenu.vue' /* webpackChunkName: "components/footer-menu" */).then(c => c.default || c),
  HandMadeImageGrid: () => import('../../components/Hand-made/ImageGrid.vue' /* webpackChunkName: "components/hand-made-image-grid" */).then(c => c.default || c),
  History: () => import('../../components/History/History.vue' /* webpackChunkName: "components/history" */).then(c => c.default || c),
  Information: () => import('../../components/Information/Information.vue' /* webpackChunkName: "components/information" */).then(c => c.default || c),
  HomeAppLinks: () => import('../../components/HomeMenu/HomeAppLinks.vue' /* webpackChunkName: "components/home-app-links" */).then(c => c.default || c),
  HomeTheHeader: () => import('../../components/HomeMenu/HomeTheHeader.vue' /* webpackChunkName: "components/home-the-header" */).then(c => c.default || c),
  HomeTheSideNav: () => import('../../components/HomeMenu/HomeTheSideNav.vue' /* webpackChunkName: "components/home-the-side-nav" */).then(c => c.default || c),
  Instagram: () => import('../../components/Instagram/Instagram.vue' /* webpackChunkName: "components/instagram" */).then(c => c.default || c),
  MenuAppLinks: () => import('../../components/Menu/AppLinks.vue' /* webpackChunkName: "components/menu-app-links" */).then(c => c.default || c),
  MenuTheHeader: () => import('../../components/Menu/TheHeader.vue' /* webpackChunkName: "components/menu-the-header" */).then(c => c.default || c),
  MenuTheSideNav: () => import('../../components/Menu/TheSideNav.vue' /* webpackChunkName: "components/menu-the-side-nav" */).then(c => c.default || c),
  ModellenAluSloepen: () => import('../../components/Modellen/AluSloepen.vue' /* webpackChunkName: "components/modellen-alu-sloepen" */).then(c => c.default || c),
  ModellenAluSportboot: () => import('../../components/Modellen/AluSportboot.vue' /* webpackChunkName: "components/modellen-alu-sportboot" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
