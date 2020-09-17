<template>
  <section class="pt-5">
    <div class="col-sm-12">
      <div class="screenshots-slider popup-gallery">
        <div class="slider-container">
          <div class="slider-content">
            <div v-for="(list,index) in List" :key="index" :class="'slider-single'+' '+ list.class">
              <a href="#" class="popup-img">
                <img :src=" list.image " :alt=" index" class="slider-single-image">
              </a>
            </div>
          </div>
          <a class="slider-left"  @click="left()"  ><i class="fa fa-angle-left" /></a>
          <a class="slider-right" @click="right()" ><i class="fa fa-angle-right" /></a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Screenshotslider',
  mounted () {
  },
  data () {
    return {
      current: { image: require('../../assets/sofbox-v2/images/home-5/501.jpeg'), class: 'active' },
      List: [
        { image: require('../../assets/sofbox-v2/images/home-5/501.jpeg'), class: 'active' },
        { image: require('../../assets/sofbox-v2/images/home-5/502.jpeg'), class: 'proactive' },
        { image: require('../../assets/sofbox-v2/images/home-5/503.jpeg'), class: 'preactive' }
      ]
    }
  },
  methods: {
    left (e) {
      const currentArrayIndex = this.List.findIndex(e => e.image === this.current.image)
      let nextIndex = currentArrayIndex + 1
      let prevtIndex = currentArrayIndex - 1
      if (prevtIndex === -1) {
        prevtIndex = 2
      }
      if (nextIndex === 3) {
        nextIndex = 0
      }
      this.List[nextIndex].class = 'preactive'
      this.List[currentArrayIndex].class = 'proactive'
      this.List[prevtIndex].class = 'active'
      this.current = this.List[prevtIndex]
    },
    right (e) {
      const currentArrayIndex = this.List.findIndex(e => e.image === this.current.image)
      let nextIndex = currentArrayIndex + 1
      let prevtIndex = currentArrayIndex - 1
      if (prevtIndex === -1) {
        prevtIndex = 2
      }
      if (nextIndex === 3) {
        nextIndex = 0
      }
      this.List[nextIndex].class = 'active'
      this.List[currentArrayIndex].class = 'preactive'
      this.List[prevtIndex].class = 'proactive'
      this.current = this.List[nextIndex]
    }
  }
}
</script>
