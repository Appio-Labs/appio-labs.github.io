<template>
  <section class="overview-block-ptb iq-projects" id="projects">
    <AnimateOnVisible name="fadeDown" :duration="1">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="heading-title">
              <h3 class="title iq-tw-7">
                {{ $t('services.projects.title') }}
              </h3>
              <p>{{ $t('services.projects.description') }}</p>
            </div>
          </div>
        </div>

      </div>
    </AnimateOnVisible>
    <div class="row">
      <div class="container-fluid center-block">
        <article class="content text-center">
          <transition name="fade">
            <p v-if="show" style="animation-duration: 0.3s">hello</p>
          </transition>
          <AnimateOnVisible class="timeline mx-auto iq-plr-80"
            v-for="(RecentPost, index) in  $t('services.projects.list')" :key="index" name="fadeLeft" :duration="0.5">
            <vue-timeline-update :thumbnail="getImgUrl(RecentPost.image)" :date="new Date(RecentPost.date)"
              :title="RecentPost.title" :description="RecentPost.description" :color="RecentPost.color"
              :category="RecentPost.tag" icon="code" />
            <div class="iq-pl-100 iq-pt-20 iq-pb-40">
              <div class="row justify-content-center iq-plr-40">
                <div v-for="(Url, index) in  RecentPost.links" class="text-center col iq-plr-20">
                  <li><a :href="Url.link"> <i :class="Url.image" /> </a></li>
                </div>
              </div>
            </div>
            <!--<div class="row">
            <div v-for="(Url, index) in  RecentPost.links" class="text-center col iq-plr-40">
              <ul><a :href="Url.link"><i :class="Url.image" /></a></ul>
            </div>
          </div>-->
          </AnimateOnVisible>
          <!--:thumbnail="getImgUrl(post.image)"  v-for="(post, index) in content.metadata.items"</AnimateOnVisible>-->
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "./Title.vue";
import AnimateOnVisible from "../Common/AnimateOnVisible.vue";

export default {
  name: "Projects",
  props: ['content'],
  components: {
    Title
  },
  methods: {
    getImgUrl(img) {
      if (img == undefined || img == "")
        return ""
      return require('../../assets/images/projects/' + img)
    },
  },
};
</script>