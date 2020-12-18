<template>
  <section id="blog" class="overview-block-ptb iq-blog blog-section">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="heading-title">
            <h3 class="title iq-tw-7">Latest Blog Post</h3>
            <p>Below are some of the most popular blogging solutions.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div
            class="owl-carousel"
            data-autoplay="true"
            data-loop="true"
            data-nav="false"
            data-dots="true"
            data-items="3"
            data-items-laptop="3"
            data-items-tab="2"
            data-items-mobile="2"
            data-items-mobile-sm="1"
            data-margin="30"
          >
            <article
              class="post max-w-sm rounded overflow-hidden flex flex-col"
              v-for="(post, $index) in posts"
              :key="`post-${$index}`"
            >
              <a :href="localePath(post.path)">
                <div class="item">
                  <CardStyle1>
                    <div slot="cardMedia">
                      <img
                        class="img-fluid center-block"
                        :src="post.media"
                        :alt="post.title"
                      />
                    </div>
                    <div slot="cardTitle">
                      <h5 class="iq-tw-7 iq-mb-10">{{ post.title }}</h5>
                    </div>
                    <div slot="cardBody">
                      <p>{{ post.description }}</p>
                    </div>
                  </CardStyle1>
                </div>
              </a>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { sofbox } from "~/assets/app/app";

export default {
  name: "Blog",
  props: ["posts"],
};
</script>
