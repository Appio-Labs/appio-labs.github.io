<template>
  <VTwoTestimonial :sectionProp="testimonialSectionProp">
    <template v-slot:imageList1>
      <div class="bg-img-jump left">
        <div class="wow zoomIn" data-wow-delay="0.2s">
          <img class="img-one" src="../../assets/sofbox-v2/images/home-1/21.jpeg" alt="image1">
        </div>
        <div class="wow zoomIn" data-wow-delay="0.4s">
          <img class="img-two" src="../../assets/sofbox-v2/images/home-1/22.jpeg" alt="image2">
        </div>
        <div class="wow zoomIn" data-wow-delay="0.6s">
          <img class="img-three" src="../../assets/sofbox-v2/images/home-1/23.jpeg" alt="image3">
        </div>
        <div class="wow zoomIn" data-wow-delay="0.8s">
          <img class="img-four" src="../../assets/sofbox-v2/images/home-1/24.jpeg" alt="image4">
        </div>
      </div>
    </template>
    <template v-slot:testimonialTitle>
      <div>
        <VTwoSectionTitle :title-section-prop="titleSectionProp" />
      </div>
    </template>
    <template v-slot:testimonialList>
      <div>
        <VTwoTestimonialCarousel2 :testimonial-list="testimonialList1" />
      </div>
    </template>
    <template v-slot:imageList2>
      <div class="bg-img-jump right">
        <div class="wow zoomIn" data-wow-delay="0.2s">
          <img class="img-one" src="../../assets/sofbox-v2/images/home-1/25.jpeg" alt="image1">
        </div>
        <div class="wow zoomIn" data-wow-delay="0.4s">
          <img class="img-two" src="../../assets/sofbox-v2/images/home-1/26.jpeg" alt="image2">
        </div>
        <div class="wow zoomIn" data-wow-delay="0.6s">
          <img class="img-three" src="../../assets/sofbox-v2/images/home-1/27.jpeg" alt="image3">
        </div>
        <div class="wow zoomIn" data-wow-delay="0.8s">
          <img class="img-four" src="../../assets/sofbox-v2/images/home-1/28.jpeg" alt="image4">
        </div>
      </div>
    </template>
  </VTwoTestimonial>
</template>
<script>
export default {
  name: 'Testimonial',
  data () {
    return {
      titleSectionProp: {
        title: 'Get tips & tricks on how to skyrocket your sales.',
        description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!'
      },

      testimonialSectionProp: {
        class: 'iq-rpt-zero'
      },

      testimonialList1: [
        { name: 'Alex xander', designation: 'CEO Sofbox', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.', image: require('../../assets/sofbox-v2/images/home-1/25.jpeg') },
        { name: 'Julia Aann', designation: 'COO Sofbox', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.', image: require('../../assets/sofbox-v2/images/home-1/26.jpeg') },
        { name: 'Mac Znder', designation: 'Manager Sofbox', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.', image: require('../../assets/sofbox-v2/images/home-1/27.jpeg') }
      ]
    }
  }
}
</script>
