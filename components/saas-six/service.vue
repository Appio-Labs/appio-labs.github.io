<template>
  <section id="" class="pb-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <VTwoSectionTitle :title-section-prop="titleSectionProp" />
        </div>
        <div v-for="(list,index) in lists" :key="index" class="col-lg-4">
          <div :class="list.class" :data-wow-delay="list.delay">
            <div class="icon-box">
              <div class="img-effect  mb-4 ">
                <img :src="list.image" alt="fancybox">
              </div>
              <h5 class="mb-2">
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
  </section>
</template>
<script>
export default {
  name: 'Service',
  data () {
    return {
      titleSectionProp: {
        title: 'Our Services',
        description: 'If you are planning on developing a product landing'
      },
      lists: [
        {
          class: 'box-effect no-effect   wow fadeInUp  text-center selected',
          delay: '0.4s',
          image: require('../../assets/sofbox-v2/images/home-9/90.png'),
          title: ' Customized Invoices',
          description: 'It is a long established fact that a reader will be distracted'
        },
        {
          class: 'box-effect no-effect   wow fadeInUp  text-center selected',
          delay: '0.6s',
          image: require('../../assets/sofbox-v2/images/home-9/91.png'),
          title: 'Stock Management',
          description: 'It is a long established fact that a reader will be distracted'
        },
        {
          class: 'box-effect no-effect   wow fadeInUp  text-center feature-box-effect',
          delay: '0.8s',
          image: require('../../assets/sofbox-v2/images/home-9/92.png'),
          title: '  Receivable &amp; Payables',
          description: 'It is a long established fact that a reader will be distracted'
        },
        {
          class: 'box-effect no-effect   wow fadeInUp  text-center selected',
          delay: '0.4s',
          image: require('../../assets/sofbox-v2/images/home-9/93.png'),
          title: ' Manage Buying &amp; Selling',
          description: 'It is a long established fact that a reader will be distracted'
        },
        {
          class: 'box-effect no-effect   wow fadeInUp  text-center selected',
          delay: '0.6s',
          image: require('../../assets/sofbox-v2/images/home-9/94.png'),
          title: ' Message Notification',
          description: 'It is a long established fact that a reader will be distracted'
        },
        {
          class: 'box-effect no-effect   wow fadeInUp  text-center selected',
          delay: '0.8s',
          image: require('../../assets/sofbox-v2/images/home-9/95.png'),
          title: 'Secure Backup',
          description: 'It is a long established fact that a reader will be distracted'
        }

      ]
    }
  }
}
</script>
