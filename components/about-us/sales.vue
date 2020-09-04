<template>
  <section class="pt-0 sofbox-fullrside-img">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <VTwoSectionTitle :title-section-prop="titleSectionProp" />
          <div class="row">
            <div class="col-lg-6">
              <div class="text-left">
                <ul class="iq-list wow fadeInUp">
                  <li v-for="(service,index) in service1" :key="index">
                    <i class="fa fa-check" /><span>{{ service.title }} </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="text-left">
                <ul class="iq-list wow fadeInUp">
                  <li v-for="(service,index) in service2" :key="index">
                    <i class="fa fa-check" /><span>{{ service.title }} </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="popup-images align-right  ">
            <div class="img-one wow zoomIn" data-wow-duration="0.6s">
              <img src="../../assets/sofbox-v2/images/home-1/09.png" alt="image1">
            </div>
            <div class="d-block">
              <div class="position-absolute img-two wow zoomIn" data-wow-delay="0.4s" data-wow-duration="0.8s">
                <img src="../../assets/sofbox-v2/images/home-1/10.png" alt="image2">
              </div>
              <div class="position-absolute img-three wow zoomIn" data-wow-delay="0.8s" data-wow-duration="1s">
                <img src="../../assets/sofbox-v2/images/home-1/11.png" alt="image3">
              </div>
              <div class="position-absolute img-four wow zoomIn" data-wow-delay="0.8s" data-wow-duration="1s">
                <img src="../../assets/sofbox-v2/images/home-1/12.png" alt="image4">
              </div>
            </div>
          </div>
          <div id="object_145818093" class="layer_wrap iq-objects  style-two right-top">
            <span class="iq-objects-02">
              <img src="../../assets/sofbox-v2/images/home-1/13.png" alt="drive02">
            </span>
            <span class="iq-objects-03">
              <img src="../../assets/sofbox-v2/images/home-1/08.png" alt="drive02">
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Sales',
  data () {
    return {
      titleSectionProp: {
        class: 'text-left',
        title: 'Get tips & tricks on how to skyrocket your sales.',
        description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!'
      },

      service1: [
        { title: 'Boost SEO ranking' },
        { title: 'Marketing' },
        { title: 'Visual Reviews' }
      ],

      service2: [
        { title: 'Social Sharing' },
        { title: 'Retention' },
        { title: 'Reviews Generation' }
      ]
    }
  }
}
</script>
