<template lang="html">
  <div class="">
    <div class="navbar-fixed">
    <TheHeader />
    <TheSideNav />
    <header class="header">
      <a href="/" class="test">
      <img src="@/assets/img/logo-1.png"
      alt="Davy&Ørsted logo"
      class="header-logo">
      </a>
    </header>
    <div class="blok-one">
      <div class="container-top-border">
      <nav id="main-navbar" class="second-navbar">
        <ul>
          <li><a href="/overons">Over ons</a></li>
          <li><a href="/boten">Boten</a></li>
          <li><a href="/jachthaven">De werf</a></li>
          <li><a href="/handmade">Handmade</a></li>
          <li><a href="/nieuws">D&Ø Magazine</a></li>
          <li><a href="/onderdelen">Onderdelen</a></li>
          <li><a href="/occasions">Occasions</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
    </div>
      </div>
    <main>
      <Nuxt />
    </main>
    <FooterMenu />
    <Footer />
  </div>
</template>

<script>
import TheHeader from '@/components/Menu/TheHeader'
import TheSideNav from '@/components/Menu/TheSideNav'
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
.second-navbar{
  display: none;
}

.container-top-border{
  width: 100vw;
  height: 35px;
  background-color: #3E4B51;
}
.test{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
  .header{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .test{
    text-align: center;
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
  .container-top-border{
    height: 55px;
  }
  .second-navbar {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .second-navbar ul {
    margin: 0;
    padding: 0;
  }

  .second-navbar li {
    display: inline-block;
    padding: 10px 20px;
  }

  .second-navbar li a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    float: right;
  }

  .second-navbar li a:hover {
    text-decoration: underline;
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
  .container-top-border{
    height: 65px;
  }
}

</style>
