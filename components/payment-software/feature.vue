<template>
  <section id="iq-feature" class="pt-0 overflow-hidden">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <VTwoSectionTitle :title-section-prop="titleSectionProp" />
        </div>
      </div>
      <div class="row position-relative">
        <div v-for="(list,index) in List" :key="index" class="col-lg-4">
          <div :class=" 'box-effect shadow-effect wow fadeInUp text-center feature-box-effect' +' '+index == 0 ? 'box-effect shadow-effect wow fadeInUp text-center feature-box-effect selected' : 'box-effect shadow-effect wow fadeInUp text-center feature-box-effect' " data-wow-delay="0.6s">
            <div class="icon-box">
              <div class="img-effect mb-4">
                <img :src="list.image" alt="fancybox">
              </div>
              <h5 class="mb-2">
                {{ list.title }}
              </h5>
              <p class="mb-0">
                {{ list.desc }}
              </p>
            </div>
          </div>
        </div>
        <div class="layer_wrap iq-objects  style-one right-top">
          <span class="iq-objects-01">
            <img src="../../assets/sofbox-v2/images/home-2/210.png" alt="drive02">
          </span>
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
        title: 'What Sofbox can do for you?',
        description: 'If you are planning on developing a product landing'
      },

      List: [
        { title: 'Virtual Card', image: require('../../assets/sofbox-v2/images/home-2/203.png'), desc: 'There are many variations of passages of Lorem Ipsum available.' },
        { title: 'Receivable & Payables', image: require('../../assets/sofbox-v2/images/home-2/202.png'), desc: 'There are many variations of passages of Lorem Ipsum available.' },
        { title: 'Buyer Protection', image: require('../../assets/sofbox-v2/images/home-2/204.png'), desc: 'There are many variations of passages of Lorem Ipsum available.' },
        { title: 'Auto Sync & Backup', image: require('../../assets/sofbox-v2/images/home-2/207.png'), desc: 'There are many variations of passages of Lorem Ipsum available.' },
        { title: 'Easy Process', image: require('../../assets/sofbox-v2/images/home-2/208.png'), desc: 'There are many variations of passages of Lorem Ipsum available.' },
        { title: 'Refund Policy', image: require('../../assets/sofbox-v2/images/home-2/209.png'), desc: 'There are many variations of passages of Lorem Ipsum available.' }
      ]
    }
  }
}
</script>
