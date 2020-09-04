<template>
  <section id="feature" class="iq-features iq-rpt-0">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <BlackSectionTitle title="Features" subtitle="Great Feature" />
        </div>
      </div>
      <div class="row">
        <div v-for="(feature,index) in features" :key="index" class="col-lg-4 col-md-6">
          <BlackCardStyle2>
            <template v-slot:cardImage>
              <img :src="feature.src" class="img-fluid" alt="images">
            </template>
            <template v-slot:cardTitle>
              <h5 class="mb-3">
                {{ feature.title }}
              </h5>
            </template>
            <template v-slot:cardContent>
              <p class="mb-0">
                It is a long established fact that a reader will be distracted by the readable content.
              </p>
            </template>
          </BlackCardStyle2>
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
      features: [
        {
          src: require('../../assets/sofbox-sass-black/images/features/01.png'),
          title: ' Calculate Your Work'
        },
        {
          src: require('../../assets/sofbox-sass-black/images/features/02.png'),
          title: ' Expenses & Reporting'
        },
        {
          src: require('../../assets/sofbox-sass-black/images/features/01.png'),
          title: '  Mail Management'
        },
        {
          src: require('../../assets/sofbox-sass-black/images/features/02.png'),
          title: ' Fast Performance'
        },
        {
          src: require('../../assets/sofbox-sass-black/images/features/01.png'),
          title: ' Fully Responsive'
        },
        {
          src: require('../../assets/sofbox-sass-black/images/features/02.png'),
          title: ' Awesome Design'
        }
      ]
    }
  }
}
</script>
