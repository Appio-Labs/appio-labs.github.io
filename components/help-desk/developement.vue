<template>
  <section class="pt-0 position-relative pb-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <VTwoSectionTitle :title-section-prop="titleSectionProp" />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="text-center">
            <img src="../../assets/sofbox-v2/images/home-3/301.png" alt="images">
          </div>
          <div class="popup-absolute-images align-center">
            <div class="img-one wow zoomIn" data-wow-duration="0.6s" style="visibility: visible; animation-duration: 0.6s; animation-name: zoomIn;">
              <img src="../../assets/sofbox-v2/images/home-3/302.png" alt="image1">
            </div>
            <div class="d-block">
              <div class="position-absolute img-two wow zoomIn" data-wow-delay="0.4s" data-wow-duration="0.8s">
                <img src="../../assets/sofbox-v2/images/home-3/303.png" alt="image2">
              </div>
              <div class="position-absolute img-three wow zoomIn" data-wow-delay="0.8s" data-wow-duration="1s">
                <img src="../../assets/sofbox-v2/images/home-3/304.png" alt="image3">
              </div>
            </div>
          </div>
          <div id="object_1068381042" class="layer_wrap iq-objects  style-two left-top">
            <span class="iq-objects-02">
              <img src="../../assets/sofbox-v2/images/home-3/311.png" alt="drive02">
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Developement',
  data () {
    return {
      titleSectionProp: {
        class: 'text-center',
        title: 'What can we help you?',
        description: 'If you are planning on developing a product landing'
      }
    }
  }
}
</script>
