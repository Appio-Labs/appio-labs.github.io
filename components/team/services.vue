<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <img src="../../assets/sofbox-v2/images/home-1/16.jpg" class="img-fluid mb-5 mb-lg-0" alt="blogimage1">
        </div>
        <div class="col-lg-6">
          <VTwoSectionTitle :title-section-prop="titleSectionProp" />
          <div class="iq-services-box wow fadeInUp text-left">
            <div class="services-content">
              <h6>Graphic Design</h6>
              <span class="progress-value">70%</span>
              <div class="iq-progress-bar">
                <span class="position-relative" data-percent="70" />
              </div>
            </div>
            <div class="services-content">
              <h6>Web Design</h6>
              <span class="progress-value">80%</span>
              <div class="iq-progress-bar">
                <span class="position-relative" data-percent="80" />
              </div>
            </div>
            <div class="services-content">
              <h6>Mobile Application</h6>
              <span class="progress-value">90%</span>
              <div class="iq-progress-bar">
                <span class="position-relative" data-percent="90" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { sofbox } from "../../assets/app/app";
export default {
  name: 'Services',
    mounted () {
    setTimeout(()=> {
      sofbox.progress()
    },1000)
  },
  data () {
    return {
      titleSectionProp: {
        title: 'Our Team have Experience in IT solutions & Services',
        description: 'If you are planning on developing a product landing',
        class: 'text-left'
      }
    }
  }
}
</script>
