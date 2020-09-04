<template>
  <section class="pb-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div
            class="owl-carousel arrow"
            data-autoplay="true"
            data-loop="true"
            data-nav="true"
            data-dots="false"
            data-items="1"
            data-items-laptop="1"
            data-items-tab="1"
            data-items-mobile="1"
            data-items-mobile-sm="1"
          >
            <div v-for="(slide,index) in slides" :key="index" class="items">
              <img :src="slide.src" class="img-fluid" alt="img">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Slider',
  data () {
    return {
      slides: [
        {
          src: require('../../assets/sofbox-v2/images/home-1/16.jpg')
        },
        {
          src: require('../../assets/sofbox-v2/images/home-1/17.jpg')
        },
        {
          src: require('../../assets/sofbox-v2/images/home-1/18.jpg')
        }
      ]
    }
  }
}
</script>
