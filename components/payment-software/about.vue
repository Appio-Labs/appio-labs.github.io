<template>
  <section id="iq-about" class="pb-0">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4">
          <VTwoSectionTitle :title-section-prop="titleSectionProp" />
          <div class="text-left ">
            <ul class="iq-list wow fadeInUp">
              <li><i class="fa fa-check" /><span>Boost SEO ranking</span></li>
              <li><i class="fa fa-check" /><span>Marketing</span></li>
              <li><i class="fa fa-check" /><span>Visual Reviews</span></li>
            </ul>
          </div>
          <a class="button mt-5 button-icon" href="#"><span class="btn-effect"> Read More</span></a>
        </div>
        <div class="col-lg-4">
          <div class="scrollme text-center">
            <div class="animateme" 
                data-when="enter"
								data-from="0.65"
								data-to="0.15"
								data-opacity="1"
								data-translatex="00"
								data-translatey="-600"
								data-easing="linear"
								data-rotatez="-25">
								<img class="img-fluid scrollme-img" src="../../assets/sofbox-v2/images/home-2/201.png" alt="image">
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div v-for="(list,index) in List" :key="index" class="fancy-icon mb-5 wow fadeInUp  text-left">
            <div class="media">
              <div class="fancy-img">
                <img :src=" list.image " alt="fancybox">
              </div>
              <div class="media-body">
                <h5 class="mt-0">
                  {{ list.title }}
                </h5>
                <p class="mb-0">
                  {{ list.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
const $ = require('jquery')
import { sofbox } from '../../assets/app/app'
export default {
  name: 'About',
  data () {
    return {
      titleSectionProp: {
        title: 'Why you chose our Payment?',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        class: 'text-left'
      },

      List: [
        { title: 'Secure Payment', image: require('../../assets/sofbox-v2/images/home-2/202.png'), description: 'There are many variations of passages of Lorem Ipsum available.' },
        { title: 'Payment Overview', image: require('../../assets/sofbox-v2/images/home-2/203.png'), description: 'There are many variations of passages of Lorem Ipsum available.' },
        { title: 'Get Discount', image: require('../../assets/sofbox-v2/images/home-2/204.png'), description: 'There are many variations of passages of Lorem Ipsum available.' }
      ]
    }
  },
  mounted () {
    this.$nextTick()
    sofbox.scrollme()
  }
}
</script>
