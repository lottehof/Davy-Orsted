<template lang="html">
  <div class="information-boxes">
    <div class="information-box-content">
      <div class="content-image" :style="{backgroundImage: 'url(' + imageBoxOne +')'}"></div>
      <h3>{{ imageBoxOneTitle }}</h3>
    </div>
    <div class="information-box-content">
      <div class="content-image" :style="{backgroundImage: 'url(' + imageBoxTwo + ')'}"></div>
        <h3>{{ imageBoxTwoTitle }}</h3>
    </div>
    <div class="information-box-content">
      <div class="content-image" :style="{backgroundImage: 'url(' + imageBoxThree +')'}"></div>
      <h3>{{ imageBoxThreeTitle }}</h3>
    </div>
    <div class="information-box-content">
      <div class="content-image"  :style="{backgroundImage: 'url(' + imageBoxFour +')'}"></div>
      <h3>{{ imageBoxFourTitle }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageBoxOne: {
      type: String,
      required: true
    },
    imageBoxOneTitle: {
      type: String,
      required: true
    },
    imageBoxTwo: {
      type: String,
      required: true,
    },
    imageBoxTwoTitle: {
      type: String,
      required: true
    },
    imageBoxThree: {
      type: String,
      required: true,
    },
    imageBoxThreeTitle: {
      type: String,
      required: true
    },
    imageBoxFour: {
      type: String,
      required: true,
    },
    imageBoxFourTitle: {
      type: String,
      required: true
    },
  }
}
</script>

<style lang="css" scoped>
.test{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.content-image{
  width: 100%;
  height: 300px;
  background-size: cover;
}
h3{
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.02px;
  color: #3d4333;
  padding-top: 20px;
  bottom: 0;
}
a{
  color: #3d4333;
  text-decoration: none;
}
.information-boxes{
  margin-top: 20px;
  margin-bottom: 20px;
  width: 90%;
  height: auto;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
}
.information-box-content{
  margin:20px 0;
  height: auto;
}

@media (min-width: 768px) {
  .information-boxes{
    width: 80%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    grid-gap: 8px;
    }
  .content-image{
    min-width: 300px;
  }
  .information-boxes > .information-box-content:nth-of-type(1){
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
  }
  .information-boxes > .information-box-content:nth-of-type(2){
    grid-column: 3 / span 2;
    grid-row: 1 / span 2
  }
  .information-boxes > .information-box-content:nth-of-type(3){
    grid-column: 1 / span 2;
    grid-row: 2 / span 2
  }
  .information-boxes > .information-box-content:nth-of-type(4){
    grid-column: 3 / span 2;
    grid-row: 2 / span 2
  }
  .information-box-content{
    max-width: 447px;
    height: 300px;
    margin-top: 41px;
    margin-left: auto;
    margin-right: auto;
  }
}
@media (min-width: 1280px) {
  .information-boxes{
    height: 400px;
    width: 95vw;
    margin: 0 auto;
    grid-template-rows: repeat(1, minmax(0, 1fr));
    margin-bottom: 100px;
  }
  img{
    width: 100%;
    height: 300px;
  }
  .information-box-content{
    width: 100%;
  }
  .information-boxes > .information-box-content:nth-of-type(1){
    grid-column: 1 / span 1;
    grid-row: 1;
  }
  .information-boxes > .information-box-content:nth-of-type(2){
    grid-column: 2 / span 1;
    grid-row: 1;
  }
  .information-boxes > .information-box-content:nth-of-type(3){
    grid-column: 3 / span 1;
    grid-row: 1;
  }
  .information-boxes > .information-box-content:nth-of-type(4){
    grid-column: 4 / span 1;
    grid-row: 1;
  }
}
</style>
