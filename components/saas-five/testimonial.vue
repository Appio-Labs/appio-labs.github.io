<template>
  <section id="iq-testimonial" class="pb-0">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <img src="../../assets/sofbox-v2/images/home-8/909.png" class="img-fluid" alt="blogimage1">
        </div>
        <div class="col-lg-6">
          <VTwoSectionTitle :title-section-prop="titleSectionProp" />
          <VTwoTestimonialCarousel3 :testimonial-list="testimonialList1" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Testimonial',
  data () {
    return {
      titleSectionProp: {
        title: 'Popular features that your business needs',
        class: 'text-left',
        description: 'Faff about only a quid blower I don’t want no agro bleeding chimneypot burke tosser cras nice one boot fanny.'
      },
      testimonialList1: [
        { name: 'Marcal Hansh', designation: 'Business Advisor', description: 'Consectetur Lorem ipsum dolor sit amet, consectetur adip isicing elit, dolor sed do eiusmod tempor consectetur adip isicing elit tempor.', image: require('../../assets/sofbox-v2/images/home-1/22.jpeg') },
        { name: 'Jancy Hanck', designation: 'CEO Sofbox', description: 'Richard McClintock, a Latin professor at Hampden-Sydney consectetur adip isicing elit, sed dolore magna aliqua hampden elit.', image: require('../../assets/sofbox-v2/images/home-1/21.jpeg') },
        { name: 'Walhan Bobe', designation: 'CEO Sofbox', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.', image: require('../../assets/sofbox-v2/images/home-1/23.jpeg') }
      ]
    }
  }
}
</script>
