<template>
  <section
    id="iq-feature"
    class="home-six-bg"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <VTwoSectionTitle :title-section-prop="titleSectionProp" />
          <div class="sofbox-feature-circle wow zoomIn postion-relative">
            <div class="sofbox-img">
              <ul class="list-inline mb-0">
                <li v-for="(list,index) in List" :key="index" class="list-inline-item">
                  <div class="feature-info">
                    <div class="feature-img">
                      <img :src="list.image">
                    </div>
                    <h6>{{ list.title }}</h6>
                  </div>
                </li>
              </ul>
              <div class="dot-circle">
                <div class="effect-circle" />
              </div>
              <div class="main-circle">
                <div class="circle-bg">
                  <img class="fancy-list-img" src="../../assets/sofbox-v2/images/home-6/610.png" alt="fancy-list">
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
  name: 'Feature',
  data () {
    return {
      titleSectionProp: {
        class: 'text-center',
        title: 'What can we help you?',
        description: 'If you are planning on developing a product landing',
        titleClass: 'text-white',
        descClass: 'text-white'
      },

      List: [
        { title: 'Marketing', image: require('../../assets/sofbox-v2/images/home-6/606.png') },
        { title: 'VPS', image: require('../../assets/sofbox-v2/images/home-6/607.png') },
        { title: 'Email', image: require('../../assets/sofbox-v2/images/home-6/608.png') },
        { title: 'SEO', image: require('../../assets/sofbox-v2/images/home-6/609.png') },
        { title: 'Reseller Hosting', image: require('../../assets/sofbox-v2/images/home-6/606.png') },
        { title: 'Web Security', image: require('../../assets/sofbox-v2/images/home-6/607.png') },
        { title: 'Business Hosting', image: require('../../assets/sofbox-v2/images/home-6/608.png') },
        { title: 'Fast Deployment', image: require('../../assets/sofbox-v2/images/home-6/609.png') },
        { title: 'Protect and backup', image: require('../../assets/sofbox-v2/images/home-6/607.png') }
      ]
    }
  }
}
</script>
<style  scoped>
.home-six-bg {
    background-image: url(../../assets/sofbox-v2/images/home-6/614.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
