<template lang="html">
  <section>
    <div class="blok-one">
      <div class="container-top-border"><h4 class="title">Jachthaven</h4></div>
      <div class="jachthaven-start-image"  :style="{backgroundImage: 'url(' + headerImage +')'}"></div>
    </div>
    <section class="quote">
      <h1 class="quote-text">{{ title }}</h1>
    </section>
    <section class="jachthaven-container">
      <div class="jachthaven-content">
        <article class="jachthaven-content-article">
          <p>{{ content }}</p>
        </article>
      </div>
      <div class="jachthaven-content">
        <div class="jachthaven-content-image" :style="{backgroundImage: 'url(' + image +')'}"></div>
      </div>
    </section>
    <Information
    :imageBoxOne="imageBoxOne"
    :imageBoxOneTitle="imageBoxOneTitle"
    :imageBoxTwo="imageBoxTwo"
    :imageBoxTwoTitle="imageBoxTwoTitle"
    :imageBoxThree="imageBoxThree"
    :imageBoxThreeTitle="imageBoxThreeTitle"
    :imageBoxFour="imageBoxFour"
    :imageBoxFourTitle="imageBoxFourTitle" />
    <Instagram />
  </section>
</template>

<script>
import Information from '@/components/Information/Information'
import Instagram from '@/components/Instagram/Instagram'
export default {
  layout: 'headerbar',
  components: {
    Information,
    Instagram,
  },
/*CONNECTOR TO CMS STORYBLOK*/
/*--------------------------*/
  asyncData(context){
    return context.app.$storyapi.get('cdn/stories/jachthaven', {
      version: process.env.NODE_ENV == "production" ? "published" : 'draft',
    }).then(res => {
      return{
      title: res.data.story.content.title,
      content: res.data.story.content.content,
      image: res.data.story.content.image,
      headerImage: res.data.story.content.header_image,
      imageBoxOne: res.data.story.content.image_box_1,
      imageBoxOneTitle: res.data.story.content.image_box_1_title,
      imageBoxTwo: res.data.story.content.image_box_2,
      imageBoxTwoTitle: res.data.story.content.image_box_2_title,
      imageBoxThree: res.data.story.content.image_box_3,
      imageBoxThreeTitle: res.data.story.content.image_box_3_title,
      imageBoxFour: res.data.story.content.image_box_4,
      imageBoxFourTitle: res.data.story.content.image_box_4_title,
      }
    })
  },
}
</script>

<style lang="css" scoped>
p{
  margin: 10px;
}
.container-top-border{
  width: 100vw;
  height: 35px;
  background-color: #3E4B51;
}
.title{
  height: 35px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.jachthaven-start-image{
  width: 100vw;
  height: 40vh;
  background-size: cover;
  background-position: center;
}
.quote{
  margin-bottom: 65px;
  margin-top: 35px;
  width: 100vw;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
}
.quote-text{
  font-size: 36px;
  width: 100%;
  height: 82px;
  font-size: 22px;
  text-align: center;
  color: #010000;
  white-space: pre-line;
}
.jachthaven-container{
  width: 100vw;
  height: auto;
  display: grid;
  margin: 0;
  grid-template-columns: 1fr;
}
.jachthaven-content:nth-of-type(2){
  height: 250px;
  width: 100%;
}
.jachthaven-content-article{
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  opacity: 60%;
}
.jachthaven-content-image{
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
.jachthaven-content-article p{
  white-space: pre-line;
}
/*MEDIA QUERIES*/
/*-------------------*/
@media (min-width: 768px) {
  .jachthaven-content-article{
    padding: 18px;
  }
  .quote{
    margin-bottom: 25px;
    padding: 0 1rem;
  }
  .jachthaven-content:nth-of-type(2){
    height: 400px;
    width: 100%;
  }
  .jachthaven-content-image{
    width: 100%;
    height: 100%;
    float: right;
  }
}

@media (min-width: 1390px) {
  .container-top-border{
    height: 55px;
  }
  .title{
    height: 55px;
  }
  .quote-text{
    font-size: 28px;
  }
  .jachthaven-content-article{
    padding: 0 18px;
    margin-left: 50px;
  }
  .jachthaven-container{
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .jachthaven-content:nth-of-type(1){
    grid-column: 1 / span 2;
  }
  .jachthaven-content:nth-of-type(2){
    grid-column: 3 / span 3;
  }
  .jachthaven-content:nth-of-type(2){
    height: auto;
    width: 100%;
  }
  .jachthaven-content-article p{
    width: 550px;
  }
  .jachthaven-content-image{
    width: 90%;
    height: 100%;
    float: right;
  }
}

@media (min-width: 1450px) {
  .jachthaven-content-image{
    width: 100%;
  }
}

@media (min-width: 1800px) {
  .container-top-border{
    height: 65px;
  }
  .title{
    height: 65px;
  }
  .quote-text{
    font-size: 30px;
  }
  .jachthaven-content-image{
    width: 100%;
    height: 578px;
    margin-right: 0;
  }
  .jachthaven-container{
    width: 100%;
    height: 665px;
    display: grid;
    margin: 0;
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .jachthaven-content:nth-of-type(1){
    grid-column: 1 / span 2;
  }
  .jachthaven-content:nth-of-type(2){
    grid-column: 3 / span 3;
  }
  .jachthaven-content-article{
    width: 593px;
    height: 665px;
    padding: 2.1rem;
    margin-left: 100px;
  }
  .jachthaven-content:nth-of-type(2){
    width: 100%;
    height: 778px;
    margin-right: 0;
  }
}


</style>
