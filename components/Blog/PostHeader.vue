<template>
  <ParallaxStyle1
    v-if="post"
    :bg-image="post.media"
    ids="iq-home"
    class-names="iq-banner iq-ptb-100 iq-counter-box iq-font-white parallax"
  >
    <div id="container">
      <h1 class="iq-font-white iq-tw-3 align-center text-center iq-ptb-100">
        {{ post.title }}
      </h1>
    </div>
    <div class="iq-ptb-100" />
  </ParallaxStyle1>
</template>
<script>
const computed = {
  /*getDate() {
    return format(new Date(this.post.createdAt), "dd/MM");
  },*/
  otherLanguages() {
    return this.post.otherLanguages || [];
  },
};
export default {
  name: "PostHeader",
  computed,
  props: ["post"],
  data() {
    return {
      bgImage:
        '"https://res.cloudinary.com/appio/image/upload/q_auto:good/v1606594666/appio/web/appio_background_02.webp"',
    };
  },
};
</script>


