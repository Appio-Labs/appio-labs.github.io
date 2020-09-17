<template>
  <section class="iq-about-us position-relative iq-rpt-0">
    <div class="container ">
      <div class="row">
        <div class="col-lg-6" />
        <div class="col-lg-6 align-self-center">
          <BlackSectionTitle2
            title="About Us"
            subtitle="Software Features?"
            titlecontent="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words
          which don't look even slightly believable."
          />
          <div class="row ">
            <div v-for="(feature,index) in features" :key="index" class="col-lg-6 col-md-6">
              <div class="features">
                <div class="feature-icon ">
                  <i :class="feature.icon" />
                </div>
                <div class="feature-info">
                  <h5 class="text-white">
                    {{ feature.title }}
                  </h5>
                  <p>{{ feature.subtitle }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="left-image wow slideInLeft">
        <img src="../../assets/sofbox-sass-black/images/about/01.png" class="img-fluid" alt="images">
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'AboutFeature',
  data () {
    return {
      features: [
        {
          title: 'Saas Analysis',
          subtitle: 'Capitalize.',
          icon: 'flaticon flaticon-stats'
        },
        {
          title: 'Time Tracker',
          subtitle: 'Hanging identify.',
          icon: 'flaticon flaticon-timer'
        },
        {
          title: 'Report Store',
          subtitle: 'Specimen',
          icon: 'flaticon flaticon-up'
        },
        {
          title: 'Data Secure',
          subtitle: 'Printer.',
          icon: 'flaticon flaticon-shield'
        }
      ]
    }
  }
}
</script>
