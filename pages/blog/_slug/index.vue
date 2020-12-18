<template>
  <div>
    <PostHeader :post="post" />
    <Post :post="post" />
    <Footer />
    <ScrollTop />
  </div>
  <!--<div class="container mx-auto pt-6">
    <article v-if="post">
      <header class="grid grid-cols-2 gap-4 mb-12 rounded shadow-lg p-4">
        <img :src="post.media" alt="post.title" />
        <div class="">
          <h2 class="text-lg font-bold text-gray-800 mb-2">{{ post.title }}</h2>
          <p class="text-sm text-gray-700 mb-2">
            {{ $t("published-at") }}
          </p>
          <p class="text-sm text-gray-700">
            {{ $t("also-available-in") }}
            <nuxt-link
              class="uppercase text-teal-600 hover:text-teal-800"
              v-for="lang in otherLanguages"
              :key="lang.locale"
              :to="lang.path"
            >
              {{ lang.locale }}
            </nuxt-link>
          </p>
        </div>
      </header>
      <nuxt-content class="text-gray-800" :document="post" />
    </article>
  </div>-->
</template>

<script>
import PostHeader from "~/components/Blog/PostHeader";
import Post from "~/components/Blog/Post";
import Footer from "~/components/Common/Footer";
import { sofbox } from "~/assets/app/app";

/*import { sofbox } from "~/assets/app/app";

export default {
  name: "Blog",
  props: ["posts"],
};*/

/*export default {
  
  
};*/

export default {
  layout: "LandingPage1",
  components: {
    PostHeader,
    Post,
    Footer,
  },
  mounted() {
    setTimeout(function () {
      sofbox.index();
      // sofbox.magnific()
    }, 1000);
  },
  async asyncData(context) {
    const { $content, params, app, route, redirect } = context;
    const slug = params.slug;
    const post = await $content(`${app.i18n.locale}/blog`, slug).fetch();
    return {
      post,
    };
  },
};
</script>

