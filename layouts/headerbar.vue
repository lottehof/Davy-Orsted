<template lang="html">
  <div class="">
    <TheHeader />
    <TheSideNav />
    <header class="header">
      <img src="@/assets/img/logo-1.png"
      alt="Davy&Ørsted logo"
      class="header-logo">
    </header>
    <main>
      <Nuxt />
    </main>
    <FooterMenu />
    <Footer />
  </div>
</template>

<script>
import TheHeader from '~/components/Menu/TheHeader'
import TheSideNav from '~/components/Menu/TheSideNav'
import FooterMenu from '@/components/Footer/FooterMenu'
import Footer from '@/components/Footer/Footer'
export default {
  components: {
    TheHeader,
    TheSideNav,
    FooterMenu,
    Footer
  }
}
</script>

<style lang="css" scoped>
  .header{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header-logo{
    width: 50%;
  }


/*MEDIA QUERIES*/
/*-------------------*/
@media (min-width: 500px) {
  .header{
    height: 60px;
  }
  .header-logo{
    width: 35%;
  }
}
@media (min-width: 768px) {
  .header{
    height: 60px;
  }
  .header-logo{
    width: 25%;
  }
}

@media (min-width: 1390px) {
  .header{
    height: 80px;
  }
  .header-logo{
    width: 20%;
  }
}

@media (min-width: 1800px) {
  .header{
    height: 107px;
  }
  .header-logo{
    height: 33px;
    width: 300px;
  }
}

</style>
