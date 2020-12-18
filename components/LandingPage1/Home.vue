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
              {{ $t("home.title") }}
            </h1>
            <a href="#contact-us" class="button bt-home iq-mt-50">
              {{ $t("contact.title") }}
            </a>
          </div>
          <div class="col-lg-6">
            <cld-image
              class="banner-img"
              :publicId="mainImageId"
              quality="auto:good"
              responsive
            />
          </div>
        </div>
      </div>
    </div>
  </ParallaxStyle1>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      bgImage:
        '"https://res.cloudinary.com/appio/image/upload/q_auto:good/v1606594666/appio/web/appio_background_02.webp"',
      mainImageId: "appio/web/home/appio_home_main.webp",
    };
  },
};
</script>
