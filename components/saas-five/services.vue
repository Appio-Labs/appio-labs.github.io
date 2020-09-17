<template>
  <section id="iq-service">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <VTwoSectionTitle :title-section-prop="titleSectionProp" />
        </div>
        <div v-for="(service,index) in services" :key="index" class="col-lg-3">
          <div :class="index == 0 ? 'box-effect-two  wow fadeInUp text-left feature-box-effect selected' : 'box-effect-two  wow fadeInUp text-left feature-box-effect' ">
            <div class="icon-box">
              <div class="img-effect mb-4">
                <img :src="service.img" alt="fancybox">
              </div>
              <h5 class="mb-2">
                {{ service.title }}
              </h5>
              <p class="mb-0">
                {{ service.subtitle }}
              </p>
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
        title: 'Popular Services',
        description: 'If you are planning on developing a product landing app or website,take a look at this beautiful-crafted'
      },
      services: [
        {
          img: require('../../assets/sofbox-v2/images/home-8/900.png'),
          title: 'Customized Invoices',
          subtitle: 'It is a long established fact that a reader will be distracted.'
        },
        {

          img: require('../../assets/sofbox-v2/images/home-8/901.png'),
          title: ' Detailed Reports',
          subtitle: 'It is a long established fact that a reader will be distracted.'
        },
        {

          img: require('../../assets/sofbox-v2/images/home-8/902.png'),
          title: 'Stock Management',
          subtitle: 'It is a long established fact that a reader will be distracted.'
        },
        {

          img: require('../../assets/sofbox-v2/images/home-8/903.png'),
          title: ' Secure Backup',
          subtitle: 'It is a long established fact that a reader will be distracted.'
        }
      ]
    }
  }
}
</script>
