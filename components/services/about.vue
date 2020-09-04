<template>
  <section id="iq-about" class="popup-images align-left pt-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="popup-images align-left  ">
            <div class="img-one wow zoomIn" data-wow-duration="0.6s">
              <img src="../../assets/sofbox-v2/images/home-1/04.png" alt="image1">
            </div>
            <div class="d-block">
              <div class="position-absolute img-two wow zoomIn" data-wow-delay="0.4s" data-wow-duration="0.8s">
                <img src="../../assets/sofbox-v2/images/home-1/05.png" alt="image2">
              </div>
              <div class="position-absolute img-three wow zoomIn" data-wow-delay="0.8s" data-wow-duration="1s">
                <img src="../../assets/sofbox-v2/images/home-1/06.png" alt="image3">
              </div>
            </div>
          </div>
          <div class="layer_wrap iq-objects  style-two left-top">
            <span class="iq-objects-02">
              <img src="../../assets/sofbox-v2/images/home-1/07.png" alt="drive02">
            </span>
            <span class="iq-objects-03">
              <img src="../../assets/sofbox-v2/images/home-1/image5.png" alt="drive02">
            </span>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="title-box text-left">
            <h2>Get tips & tricks on how to skyrocket your sales.</h2>
            <p>Faff about only a quid blower I don’t want no agro bleeding chimney<br> pot burke tosser cras nice one boot fanny.!</p>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="progressbar-circle" data-animate="false">
                <div class="circle purple-hover" data-percent="50">
                  <div>50%</div>
                  <p class="mt-3 mb-0 font-c iq-fw-6 text-black">Graphics</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="progressbar-circle" data-animate="false">
                <div class="circle org-hover" data-percent="50">
                  <div>50%</div>
                  <p class="mt-3 mb-0 font-c iq-fw-6 text-black">Graphics</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="progressbar-circle" data-animate="false">
                <div class="circle green-hover" data-percent="50">
                  <div>50%</div>
                  <p class="mt-3 mb-0 font-c iq-fw-6 text-black">Graphics</p>
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
import { sofbox } from '../../assets/app/app'
const circelProgress = () => import('../../assets/sofbox-v2/js/circle-progress')
export default {
  name: 'About',
  data () {
    return {
      titleSectionProp: {
        class: 'text-left',
        title: 'Get tips & tricks on how to skyrocket your sales.',
        description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!'
      },

      List: [
        { title: 'Graphics', animate: 'false', hoverClass: 'purple-hover', percentage: '50' },
        { title: 'Graphics', animate: 'false', hoverClass: 'org-hover', percentage: '50' },
        { title: 'Graphics', animate: 'false', hoverClass: 'green-hover', percentage: '50' }
      ]
    }
  },
  mounted () {
    circelProgress()
    setTimeout(() => {
      sofbox.progressBar()
    }, 1000)
  },
  methods: {
    handleScroll (event) {
      sofbox.progressBar()
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>
