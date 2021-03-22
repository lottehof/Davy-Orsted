export { default as Post } from '../../components/Post.vue'
export { default as Slide } from '../../components/Slide.vue'
export { default as BlogPostPreview } from '../../components/Blog/PostPreview.vue'
export { default as Footer } from '../../components/Footer/Footer.vue'
export { default as FooterMenu } from '../../components/Footer/FooterMenu.vue'
export { default as History } from '../../components/History/History.vue'
export { default as HandMadeImageGrid } from '../../components/Hand-made/ImageGrid.vue'
export { default as HomeAppLinks } from '../../components/HomeMenu/HomeAppLinks.vue'
export { default as HomeTheHeader } from '../../components/HomeMenu/HomeTheHeader.vue'
export { default as HomeTheSideNav } from '../../components/HomeMenu/HomeTheSideNav.vue'
export { default as Instagram } from '../../components/Instagram/Instagram.vue'
export { default as MenuAppLinks } from '../../components/Menu/AppLinks.vue'
export { default as MenuTheHeader } from '../../components/Menu/TheHeader.vue'
export { default as MenuTheSideNav } from '../../components/Menu/TheSideNav.vue'
export { default as Information } from '../../components/Information/Information.vue'
export { default as ModellenAluSloepen } from '../../components/Modellen/AluSloepen.vue'
export { default as ModellenAluSportboot } from '../../components/Modellen/AluSportboot.vue'

export const LazyPost = import('../../components/Post.vue' /* webpackChunkName: "components/post" */).then(c => c.default || c)
export const LazySlide = import('../../components/Slide.vue' /* webpackChunkName: "components/slide" */).then(c => c.default || c)
export const LazyBlogPostPreview = import('../../components/Blog/PostPreview.vue' /* webpackChunkName: "components/blog-post-preview" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyFooterMenu = import('../../components/Footer/FooterMenu.vue' /* webpackChunkName: "components/footer-menu" */).then(c => c.default || c)
export const LazyHistory = import('../../components/History/History.vue' /* webpackChunkName: "components/history" */).then(c => c.default || c)
export const LazyHandMadeImageGrid = import('../../components/Hand-made/ImageGrid.vue' /* webpackChunkName: "components/hand-made-image-grid" */).then(c => c.default || c)
export const LazyHomeAppLinks = import('../../components/HomeMenu/HomeAppLinks.vue' /* webpackChunkName: "components/home-app-links" */).then(c => c.default || c)
export const LazyHomeTheHeader = import('../../components/HomeMenu/HomeTheHeader.vue' /* webpackChunkName: "components/home-the-header" */).then(c => c.default || c)
export const LazyHomeTheSideNav = import('../../components/HomeMenu/HomeTheSideNav.vue' /* webpackChunkName: "components/home-the-side-nav" */).then(c => c.default || c)
export const LazyInstagram = import('../../components/Instagram/Instagram.vue' /* webpackChunkName: "components/instagram" */).then(c => c.default || c)
export const LazyMenuAppLinks = import('../../components/Menu/AppLinks.vue' /* webpackChunkName: "components/menu-app-links" */).then(c => c.default || c)
export const LazyMenuTheHeader = import('../../components/Menu/TheHeader.vue' /* webpackChunkName: "components/menu-the-header" */).then(c => c.default || c)
export const LazyMenuTheSideNav = import('../../components/Menu/TheSideNav.vue' /* webpackChunkName: "components/menu-the-side-nav" */).then(c => c.default || c)
export const LazyInformation = import('../../components/Information/Information.vue' /* webpackChunkName: "components/information" */).then(c => c.default || c)
export const LazyModellenAluSloepen = import('../../components/Modellen/AluSloepen.vue' /* webpackChunkName: "components/modellen-alu-sloepen" */).then(c => c.default || c)
export const LazyModellenAluSportboot = import('../../components/Modellen/AluSportboot.vue' /* webpackChunkName: "components/modellen-alu-sportboot" */).then(c => c.default || c)
