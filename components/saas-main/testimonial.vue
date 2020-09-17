<template>
  <section class="sofbox-gradient-bg-top pb-0">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <h2 class="mb-3">
            How Clients React
          </h2>
          <div
            class="owl-carousel our-testimonial"
            data-autoplay="true"
            data-loop="true"
            data-nav="false"
            data-dots="true"
            data-items="1"
            data-items-laptop="1"
            data-items-tab="1"
            data-items-mobile="1"
            data-items-mobile-sm="1"
          >
            <div v-for="(list,index) in List" :key="index" class="item text-left">
              <div class="iq-testimonial">
                <div class="testimonial-info">
                  <div class="testimonial-name mb-3">
                    <h5 class="d-inline mr-3">
                      {{ list.name }}
                    </h5>
                    <span class="sub-title">{{ list.design }}</span>
                  </div>
                </div>
                <p>{{ list.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="testimonial-circle postion-relative">
            <div class="testimonial-img">
              <ul class="list-inline mb-0">
                <li v-for="(list,index) in images" :key="index" class="list-inline-item">
                  <img :src="list.image" class="img-fluid client-img wow zoomIn" alt="image0">
                </li>
              </ul>
              <div class="dot-circle">
                <div class="effect-circle" />
              </div>
              <div class="main-circle">
                <div class="circle-bg">
                  <img src="../../assets/sofbox-v2/images/home-2/logo-white.png" alt="image">
                </div>
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
  name: 'Testimonial',
  data () {
    return {
      List: [
        { name: 'Marcal Hansh', design: 'Business Advisor', description: 'Consectetur Lorem ipsum dolor sit amet, consectetur adip isicing elit, dolor sed do eiusmod tempor consectetur adip isicing elit tempor.' },
        { name: 'Jancy Hanck', design: 'CEO Sofbox', description: 'Richard McClintock, a Latin professor at Hampden-Sydney consectetur adip isicing elit, sed dolore magna aliqua hampden elit.' },
        { name: 'Walhan Bobe', design: 'CEO Sofbox', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.' }
      ],

      images: [
        { image: require('../../assets/sofbox-v2/images/home-4/404.jpeg') },
        { image: require('../../assets/sofbox-v2/images/home-4/405.jpeg') },
        { image: require('../../assets/sofbox-v2/images/home-4/406.jpeg') },
        { image: require('../../assets/sofbox-v2/images/home-4/407.jpeg') },
        { image: require('../../assets/sofbox-v2/images/home-4/408.jpeg') },
        { image: require('../../assets/sofbox-v2/images/home-4/409.jpeg') },
        { image: require('../../assets/sofbox-v2/images/home-4/410.jpeg') },
        { image: require('../../assets/sofbox-v2/images/home-4/411.jpeg') }
      ]
    }
  }
}
</script>
<style scoped>
.sofbox-gradient-bg-top {
    background-image: url(../../assets/sofbox-v2/images/home-1/15.png);
    background-position: 0 0 !important;
    background-repeat: no-repeat !important;
}
</style>
