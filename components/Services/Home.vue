<template>
  <ParallaxStyle1
    ids="iq-home"
    :bg-image="bgImage"
    class-names="iq-banner iq-pb-100 overview-block-pt iq-bg-over iq-over-blue-1 iq-parallax"
  >
    <div class="container-fluid">
      <div class="banner-text">
        <div class="row">
          <div class="col-lg-6">
            <h1 class="iq-font-white iq-tw-3">
              {{ $t("services.title") }}
            </h1>
            <!--<p class="iq-font-white iq-pt-15 iq-pb-100">
              {{ $t('home.introduction') }}
            </p>-->
            <!--<p class="iq-ptb-70"></p>-->
            <!--<div class="waves-box">
              <a href="http://www.youtube.com/watch?v=kzyFmrFky7Y" class="iq-video popup-youtube" target="_blank"><i class="ion-ios-play-outline" /></a>
              <div class="iq-waves">
                <div class="waves wave-1" />
                <div class="waves wave-2" />
                <div class="waves wave-3" />
              </div>
            </div>-->
            <a href="#contact-us" class="button bt-home iq-mt-50">{{
              $t("contact.title")
            }}</a>
          </div>
          <div class="col-lg-6">
            <img
              class="banner-img"
              :src="require('../../assets/images/banner/01-2.png')"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <!--<div class="banner-objects">
      <span class="banner-objects-01" data-bottom="transform:translatey(50px)" data-top="transform:translatey(-50px);">
        <img :src="require('../../assets/images/drive/03.png')" alt="drive02">
      </span>
      <span class="banner-objects-02 iq-fadebounce">
        <span class="iq-round" />
      </span>
      <span class="banner-objects-03 iq-fadebounce">
        <span class="iq-round" />
      </span>
    </div>-->
  </ParallaxStyle1>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      bgImage:
        '"https://res.cloudinary.com/appio/image/upload/q_auto:good/v1606594666/appio/web/appio_background_02.webp"',
    };
  },
};
</script>
