<template lang="html">
  <div class="total">
    <TheHeader/>
    <TheSideNav/>
    <div class="start"  :style="{backgroundImage: 'url(' + headerImage +')'}">
      <div class="gradient-border">
        <img src="@/assets/img/logo-nav.png" alt="logo" class="logo">
        <img src="@/assets/img/Buildtolast.png" alt="logo" class="buildtolast">
      </div>
    </div>
    <History
    :title="title"
    :content="content"
    :image="image" />
    <AluSloepen
    :typeOfBoatOne="typeOfBoatOne"
    :boatImageOne="boatImageOne"
    :boatTitleOne="boatTitleOne"
    :boatSubtitleOne="boatSubtitleOne"
    :boatOneListItem1="boatOneListItem1"
    :boatOneListItem2="boatOneListItem2"
    :boatOneListItem3="boatOneListItem3"
    :boatOneListItem4="boatOneListItem4"
    :boatOneListItem5="boatOneListItem5"
    :boatImageTwo="boatImageTwo"
    :boatTitleTwo="boatTitleTwo"
    :boatSubtitleTwo="boatSubtitleTwo"
    :boatTwoListItem1="boatTwoListItem1"
    :boatTwoListItem2="boatTwoListItem2"
    :boatTwoListItem3="boatTwoListItem3"
    :boatTwoListItem4="boatTwoListItem4"
    :boatTwoListItem5="boatTwoListItem5"
    />
    <AluSportboot
    :typeOfBoatTwo="typeOfBoatTwo"
    :boatImageThree="boatImageThree"
    :boatTitleThree="boatTitleThree"
    :boatSubtitleThree="boatSubtitleThree"
    :boatThreeListItem1="boatThreeListItem1"
    :boatThreeListItem2="boatThreeListItem2"
    :boatThreeListItem3="boatThreeListItem3"
    :boatThreeListItem4="boatThreeListItem4"
    :boatThreeListItem5="boatThreeListItem5"
    :boatImageFour="boatImageFour"
    :boatTitleFour="boatTitleFour"
    :boatSubtitleFour="boatSubtitleFour"
    :boatFourListItem1="boatFourListItem1"
    :boatFourListItem2="boatFourListItem2"
    :boatFourListItem3="boatFourListItem3"
    :boatFourListItem4="boatFourListItem4"
    :boatFourListItem5="boatFourListItem5" />
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
  </div>
</template>

<script>
import History from '@/components/History/History'
import AluSloepen from '@/components/Modellen/AluSloepen'
import AluSportboot from '@/components/Modellen/AluSportboot'
import Instagram from '@/components/Instagram/Instagram'
import Information from '@/components/Information/Information'
import TheHeader from '~/components/HomeMenu/HomeTheHeader'
import TheSideNav from '~/components/HomeMenu/HomeTheSideNav'
export default {
  components: {
    History,
    AluSloepen,
    Instagram,
    AluSportboot,
    Information,
    TheHeader,
    TheSideNav,
  },
  computed: {
      isSidebar() {
          return this.$store.getters['nav/toggleSidebar']
      }
  },
  watch: {
      '$route': function() {
          if (process.client && this.isSidebar && window.innerWidth < 768) {
              this.$store.dispatch('nav/toggleSidebar')
          }
      },
  },
  asyncData(context){
    return context.app.$storyapi.get('cdn/stories/landingpage', {
      version: process.env.NODE_ENV == "production" ? "published" : 'draft',
    }).then(res => {
      return{
      headerImage: res.data.story.content.header_image,
      title: res.data.story.content.title,
      image: res.data.story.content.image,
      content: res.data.story.content.content,

      typeOfBoatOne: res.data.story.content.type_of_boat_1,
      imageBoxOne: res.data.story.content.image_box_1,
      imageBoxOneTitle: res.data.story.content.image_box_1_title,
      imageBoxTwo: res.data.story.content.image_box_2,
      imageBoxTwoTitle: res.data.story.content.image_box_2_title,
      imageBoxThree: res.data.story.content.image_box_3,
      imageBoxThreeTitle: res.data.story.content.image_box_3_title,
      imageBoxFour: res.data.story.content.image_box_4,
      imageBoxFourTitle: res.data.story.content.image_box_4_title,

      boatImageOne: res.data.story.content.boat_image_one,
      boatTitleOne: res.data.story.content.first_boat_title,
      boatSubtitleOne: res.data.story.content.boat_subtitle_1,
      boatOneListItem1: res.data.story.content.boat_1_listItem_1,
      boatOneListItem2: res.data.story.content.boat_1_listItem_2,
      boatOneListItem3: res.data.story.content.boat_1_listItem_3,
      boatOneListItem4: res.data.story.content.boat_1_listItem_4,
      boatOneListItem5: res.data.story.content.boat_1_listItem_5,

      boatImageTwo: res.data.story.content.boat_image_two,
      boatTitleTwo: res.data.story.content.second_boat_title,
      boatSubtitleTwo: res.data.story.content.boat_subtitle_2,
      boatTwoListItem1: res.data.story.content.boat_2_listItem_1,
      boatTwoListItem2: res.data.story.content.boat_2_listItem_2,
      boatTwoListItem3: res.data.story.content.boat_2_listItem_3,
      boatTwoListItem4: res.data.story.content.boat_2_listItem_4,
      boatTwoListItem5: res.data.story.content.boat_2_listItem_5,

      typeOfBoatTwo: res.data.story.content.type_of_boat_2,
      boatImageThree: res.data.story.content.boat_image_three,
      boatTitleThree: res.data.story.content.third_boat_title,
      boatSubtitleThree: res.data.story.content.boat_subtitle_3,
      boatThreeListItem1: res.data.story.content.boat_3_listItem_1,
      boatThreeListItem2: res.data.story.content.boat_3_listItem_2,
      boatThreeListItem3: res.data.story.content.boat_3_listItem_3,
      boatThreeListItem4: res.data.story.content.boat_3_listItem_4,
      boatThreeListItem5: res.data.story.content.boat_3_listItem_5,

      boatImageFour: res.data.story.content.boat_image_four,
      boatTitleFour: res.data.story.content.fourth_boat_title,
      boatSubtitleFour: res.data.story.content.boat_subtitle_4,
      boatFourListItem1: res.data.story.content.boat_4_listItem_1,
      boatFourListItem2: res.data.story.content.boat_4_listItem_2,
      boatFourListItem3: res.data.story.content.boat_4_listItem_3,
      boatFourListItem4: res.data.story.content.boat_4_listItem_4,
      boatFourListItem5: res.data.story.content.boat_4_listItem_5,
      }
    })
  },
}
</script>
<style lang="css" scoped>
.total{
  width: 100vw;
}
.start{
  height: 100vh;
  background-position: 40% 20%;
  background-size: cover;
}
.gradient-border{
  width: 100vw;
  height: 416px;
  background-image: linear-gradient(to bottom, #000000 -7%, rgba(3, 3, 3, 0.99) -6%, rgba(122, 122, 122, 0) 53%, rgba(255, 255, 255, 0) 76%, rgba(216, 216, 216, 0));
}
.logo{
  position: absolute;
  top: 40px;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  left: 0;
  right: 0;
  text-align: center;
}
.buildtolast{
  position: absolute;
  top: 70px;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  left: 0;
  right: 0;
  text-align: center
}

@media (min-width: 600px) {
  .logo{
    top: 40px;
    width: 350px;
  }
  .buildtolast{
    top: 100px;
  }
}

</style>
