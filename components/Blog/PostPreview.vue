<template>
  <article class="post-preview">
    <div class="title">
      <h1 class="post-preview-title">{{ title }}</h1>
    </div>
    <div class="post-preview-container">
      <div :style="{backgroundImage: 'url(' + thumbnailImage + ')'}"
              class="post-preview-thumbnail">
      </div>
      <div class="post-preview-content">
        <p class="post-preview-text">{{ excerpt }}</p>
        <nuxt-link :to="'/nieuws/' + id">
          <p class="post-preview-text-button">Lees meer</p>
        </nuxt-link>
      </div>
    </div>
    <hr>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: true
    },
    thumbnailImage: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
  }
};
</script>

<style scoped>
.post-preview {
  min-height: 400px;
  display: block;
  width: 100%;
  margin-bottom: 100px;
}
.post-preview-title{
  font-size: 24px;
  padding: 0 20px;
  color: #3E4B51;
  padding-top: 30px;
  /* opacity: 60%; */
  margin-bottom: 50px;
}
.post-preview-thumbnail {
  background-position: center;
  background-size: cover;
  width: 100%;
  min-height: 350px;
}
.post-preview-text{
  width: 100%;
  height: auto;
  padding: 0 20px;
  margin-top: 20px;
  /* opacity: 60%; */
}
.post-preview-text-button{
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  padding: 20px;
  color: #3E4B51;
  text-transform: uppercase;
  text-decoration: underline;
  /* opacity: 60%; */
}
.post-preview-text-button:hover{
  color: black;
  opacity: 100%;
}

hr{
  margin-top: 20px;
}
a {
  text-decoration: none;
  color: black;
}
p{
  white-space: pre-line;
}

@media (min-width: 768px) {
  .post-preview-text{
    font-size: 18px;
  }
}
@media (min-width: 1300px) {
  .post-preview{
    width: 100%;
  }
  .post-preview-container{
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
  .post-preview-thumbnail {
    grid-column: 3 / span 2;
    grid-row: 1 / span 2;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
  }
  .post-preview-content {
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
  }
}
</style>
