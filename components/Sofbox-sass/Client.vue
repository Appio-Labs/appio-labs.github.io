<template>
  <section class="iq-clients pt-0">
    <div class="container ">
      <div class="row">
        <div
          class="owl-carousel owl-theme owl-loaded"
          data-dots="false"
          data-nav="false"
          data-items="5"
          data-items-laptop="5"
          data-items-tab="4"
          data-items-mobile="2"
          data-items-mobile-sm="1"
          data-autoplay="true"
          data-margin="30"
        >
          <div v-for="(option,index) in images" :key="index" class="item">
            <div class="iq-client-info text-center">
              <div class="img ">
                <img :src="option.src" class="img-fluid mb-4 default-img" alt="images">
                <img :src="option.hover" class="img-fluid mb-4 hover-img" alt="hover-images">
                <h5 class="text-white">
                  {{ option.title }}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Client',
  data () {
    return {
      images: [
        {
          src: require('../../assets/sofbox-sass-black/images/partners/01.png'),
          hover: require('../../assets/sofbox-sass-black/images/partners/hover/01.png'),
          title: 'Sofboost'
        },
        {
          src: require('../../assets/sofbox-sass-black/images/partners/02.png'),
          hover: require('../../assets/sofbox-sass-black/images/partners/hover/02.png'),
          title: 'Sofpress'
        },
        {
          src: require('../../assets/sofbox-sass-black/images/partners/03.png'),
          hover: require('../../assets/sofbox-sass-black/images/partners/hover/03.png'),
          title: 'Sof Plus'
        },
        {
          src: require('../../assets/sofbox-sass-black/images/partners/04.png'),
          hover: require('../../assets/sofbox-sass-black/images/partners/hover/04.png'),
          title: 'sofchemp'
        },
        {
          src: require('../../assets/sofbox-sass-black/images/partners/05.png'),
          hover: require('../../assets/sofbox-sass-black/images/partners/hover/05.png'),
          title: 'Sof Pro'
        },
        {
          src: require('../../assets/sofbox-sass-black/images/partners/02.png'),
          hover: require('../../assets/sofbox-sass-black/images/partners/hover/02.png'),
          title: 'Sofpress'
        },
        {
          src: require('../../assets/sofbox-sass-black/images/partners/03.png'),
          hover: require('../../assets/sofbox-sass-black/images/partners/hover/03.png'),
          title: 'Sof Plus'
        }
      ]
    }
  }
}
</script>
