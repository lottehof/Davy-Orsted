<template lang="html">
  <section class="onderdelen">
    <section>
      <div class="container-top-border"></div>
    </section>
<h1>Onderdelen</h1>
  </section>
</template>

<script>
export default {
  layout: 'headerbar'
}
</script>

<style lang="css" scoped>
.onderdelen{
  height: 100vh;
  width: 100vw;
}
.container-top-border{
  width: 100vw;
  height: 45px;
  background-color: #3E4B51;
}
@media (min-width: 1390px) {
  .container-top-border{
    height: 55px;
  }
}
@media (min-width: 1800px) {
  .container-top-border{
    height: 65px;
  }
}
</style>
