<template lang="html">
  <article class="post-preview">
    <nuxt-link :to="'/boten/' + id">

    <div class="post-preview-container">
      <div :style="{backgroundImage: 'url(' + thumbnailImage + ')'}"
              class="post-preview-thumbnail">
      </div>
      <div class="title">
        <h1 class="post-preview-title">{{ title }}</h1>
      </div>
      <div class="post-preview-content">
        <p class="post-preview-text">{{ excerpt }}</p>
      </div>
      <div class="button-holder">
      <button class="post-preview-button" type="button" name="button">Lees meer</button>
    </div>
    </div>
    </nuxt-link>
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
}
</script>

<style lang="css" scoped>
.post-preview{
  width: 350px;
  margin-bottom: 50px;
  /* border: 1px solid red; */
  min-height: 700px;
  position: relative;
  z-index: 0;
}
.post-preview:hover{
     box-shadow: 0 8px 6px -6px black;
}
.title{

}
.post-preview-title{
  font-size: 24px;
  color: #3E4B51;
  padding-top: 30px;
  text-align: center;
}
.post-preview-container{
  height: auto;

}
.post-preview-thumbnail {
 background-position: center;
 background-size: cover;
 width: 350px;
 min-height: 250px;
}

.post-preview-text{
  width: 100%;
  height: auto;
  margin-top: 20px;
  padding: 16px 20px 20px 30px;
  line-height: 2.43;
  letter-spacing: 0.7px;

}
.button-holder{
  display: flex;
  align-items: center;
  justify-content: center;
}
.post-preview-button{
  background-color: #E0E0DD;
  border: none;
  font-size: 16px;
  width: 200px;
  height: 40px;
  border-radius: 20px;
  position: absolute;
  letter-spacing: 1.3px;
  bottom: 3%;
}
.post-preview-button:hover{
  background-color: #2A393F;
  color: white;
}
a {
  text-decoration: none;
  color: black;
}
p{
  white-space: pre-line;
}

@media (min-width: 768px) {

}

/* .post-preview {
  min-height: 400px;
  display: block;
  width: 100%;
  margin-bottom: 100px;
} */
/* .post-preview-title{
  font-size: 24px;
  padding: 0 20px;
  color: #3E4B51;
  padding-top: 30px;
  margin-bottom: 50px;
} */
/* .post-preview-thumbnail {
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

} */
/* .post-preview-text-button{
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  padding: 20px;
  color: #3E4B51;
  text-transform: uppercase;
  text-decoration: underline;

} */
/* .post-preview-text-button:hover{
  color: black;
} */

/* hr{
  margin-top: 20px;
}
a {
  text-decoration: none;
  color: black;
}
p{
  white-space: pre-line;
} */

/* @media (min-width: 768px) {
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
} */
</style>
