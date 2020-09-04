<template>
  <section class="bg-img-two">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="card-img-effect  ">
            <div class="main-img wow fadeIn" data-wow-delay="0.2s">
              <img src="../../assets/sofbox-v2/images/home-2/205.png" alt="image1">
            </div>
            <div class="sub-img wow rotate-effect-two" data-wow-delay="0.4s">
              <img src="../../assets/sofbox-v2/images/home-2/206.png" alt="image2">
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <VTwoSectionTitle :title-section-prop="titleSectionProp" />
          <div class="row">
            <div v-for="(list,index) in List" :key="index" class="col-lg-4">
              <div :class="'sox-services'+' '+list.hoverClass">
                <div class="sox-icon">
                  <i :class="'flaticon'+' '+ list.icon" aria-hidden="true" />
                  <h6 class="text-hover">
                    {{ list.title }}
                  </h6>
                </div>
                <div class="service-number">
                  <span>{{ index + 1 }}</span>
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
  name: 'Services',
  data () {
    return {
      titleSectionProp: {
        title: 'Save Your Time & See How It works any platform',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        class: 'text-left'
      },

      List: [
        { title: 'Make Account', icon: 'flaticon-accounting', hoverClass: 'purple-hover' },
        { title: 'Select Recipient', icon: 'flaticon-reward', hoverClass: 'org-hover' },
        { title: 'Send Money', icon: 'flaticon-investment', hoverClass: 'green-hover' }
      ]
    }
  }
}
</script>
<style Scoped>
sofbox-gradient-bg-top {
    background-image: url(../../assets/sofbox-v2/images/home-1/15.png);
    background-position: 0 0 !important;
    background-repeat: no-repeat !important;
}
</style>
