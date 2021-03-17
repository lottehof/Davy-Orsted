<template>
  <section class="nieuwsbrief">
    <div class="blok">
      <div class="container-top-border"><h4 class="nav-title">Nieuws</h4></div>
      <img src="@/assets/img/14.jpeg" alt="logo" class="nieuwsbrief-start-image">
    </div>
    <div class="nieuwsbrief-container">
      <h1 class="nieuwsbrief-container-title">D&Ø Magazine</h1>
      <div class="content">
        <p class="nieuwsbrief-container-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
    <section class="post-preview-holder">
      <PostPreview
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :excerpt="post.previewText"
        :thumbnailImage="post.thumbnailUrl"
        :id="post.id"/>
    </section>
  </section>
</template>

<script>
import PostPreview from '@/components/Blog/PostPreview'
export default {
  layout: 'headerbar',
  components: {
    PostPreview,
  },
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories', {
      version: process.env.NODE_ENV == "production" ? "published" : 'draft',
      starts_with: 'nieuws/'
    }).then(res => {
      console.log(res);
      return { posts: res.data.stories.map(bp => {
        return {
          id: bp.slug,
          title: bp.content.title,
          previewText: bp.content.summary,
          thumbnailUrl: bp.content.image
        }
      })
    };
  });
  }
}
</script>

<style scoped>
.nieuwsbrief{
  min-height: 110vh;
  width: 100vw;
  margin-bottom: 100px;
}

.container-top-border{
  width: 100vw;
  height: 35px;
  background-color: #3E4B51;
}
.nav-title{
  height: 35px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nieuwsbrief-start-image{
  width: 100vw;
  height: 60vh;
  background-size: contain;
  background-position: center;
}
.nieuwsbrief-container-title{
  font-size: 36px;
  width: 100%;
  text-align: center;
  color: #010000;
  white-space: pre-line;
  margin-top: 20px;
}
.content{
  display: flex;
  align-items: center;
  justify-content: center;
}
.nieuwsbrief-container-content{
  width: 70%;
  height: auto;
  font-size: 16px;
  /* opacity: 60%; */
  padding:20px;
  text-align: center;
}
.post-preview-holder{
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 1390px) {
  .container-top-border{
    height: 55px;
  }
  .nav-title{
    height: 55px;
  }
}

@media (min-width: 1800px) {
  .container-top-border{
    height: 65px;
  }
  .nav-title{
    height: 65px;
  }
}
</style>
