<template>
  <div>
    <ParallaxStyle1 class-names="overview-block-pt iq-ptb-100 iq-counter-box iq-parallax" ids="counter">
      <div class="container">
        <div class="row">
          <div class="iq-objectsnew">
            <span class="iq-objects-02" data-bottom="transform:translatey(50px)" data-top="transform:translatey(-100px);">
              <img src="../../assets/images/drive/03.png" class="img-fluid" alt="drive02" />
            </span>
            <span class="iq-objects-03" data-bottom="transform:translatex(50px)" data-top="transform:translatex(-100px);">
              <img src="../../assets/images/drive/04.png" class="img-fluid" alt="drive02" />
            </span>
            <span class="iq-objects-04 iq-fadebounce">
              <span class="iq-round"></span>
            </span>
          </div>
          <div class="col-sm-12">
            <AnimateOnVisible name="fadeUp" :duration="1">
              <div class="heading-title">
                <h3 class="title iq-tw-7">{{ $t("about.who.title") }}</h3>
              </div>
            </AnimateOnVisible>
            <div class="row">
              <div slot="cardBody" class="col-lg-6 align-self-center">
                <AnimateOnVisible name="fadeLeft" :duration="0.5">
                  <div>
                    <p>
                      <span v-html="$t('about.who.description1')" />
                    </p>
                    <p class="iq-mt-20">
                      <span v-html="$t('about.who.description2')" />
                    </p>
                    <p class="iq-mt-20">
                      <span v-html="$t('about.who.description3')" />
                    </p>
                  </div>
                </AnimateOnVisible>
              </div>
              <div slot="cardMedia" class="col-lg-6 align-self-center">
                <AnimateOnVisible name="bounce">
                  <div>
                    <img class="iq-works-img pull-right img-fluid" src="../../assets/images/banner/02-4.png"
                      alt="drive01" />
                  </div>
                </AnimateOnVisible>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxStyle1>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      small: true,
      image: require("../../assets/images/bg/02.jpg"),
    };
  },
};
</script>
