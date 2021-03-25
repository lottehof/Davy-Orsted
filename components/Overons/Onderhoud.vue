<template lang="html">
  <section>
    <div class="onderhoud">
      <h2 class="onderhoud-title">{{blok.onderhoud}}</h2>
      <article class="onderhoud-article">
        <section class="post-content" v-html="$options.filters.markdown(blok.onderhoud_content)"></section>
        <figure>
          <img class="onderhoud-image" :src="blok.onderhoud_image" alt="Jachthaven">
        </figure>
      </article>
    </div>
    <div class="winterstalling">
      <h2>{{blok.winterstalling}}</h2>
      <article class="winterstalling-article">
        <section class="post-content" v-html="$options.filters.markdown(blok.winterstalling_content)"></section>
        <figure>
          <img class="overons-content-image" :src="blok.winterstalling_image" alt="Jachthaven">
        </figure>
      </article>
    </div>
    <div class="parking">
      <article class="parking-article">
        <section class="post-content" v-html="$options.filters.markdown(blok.parking_content)"></section>
        <figure>
          <img class="overons-content-image" :src="blok.bottom_image" alt="Jachthaven">
        </figure>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
.onderhoud,
.wintestalling,
.parking{
  /* width: 900px; */
  margin: 0 auto;
}
.onderhoud{
  background-color: #4C565C;
  color: white;
  width: 100%;
  padding: 20px;
}
.onderhoud-article{
  display: grid;
  
}
.onderhoud-title, .onderhoud-article{
  width: 800px;
  margin: 0 auto;
}
.onderhoud-title{
  padding: 10px 0px;
  text-align: center;
}
.onderhoud-image{
  width: 900px;
}
.overons-content-image{
  width: 400px;
}
</style>
