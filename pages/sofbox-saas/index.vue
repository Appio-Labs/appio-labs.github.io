<template>
  <div class="main-content">
    <Home />
    <HowItWork />
    <AboutUs />
    <AboutFeature />
    <WhyChooseUs />
    <Feature />
    <Team />
    <Testimonial />
    <Pricing />
    <Blogs />
    <Client />
    <Footer />
  </div>
</template>

<script>
import { sofbox } from '../../assets/app/app'
import HowItWork from '../../components/Sofbox-sass/HowItWork'
import AboutUs from '~/components/Sofbox-sass/AboutUs'
import AboutFeature from '~/components/Sofbox-sass/AboutFeature'
import Footer from '~/components/Sofbox-sass/Footer'
import WhyChooseUs from '~/components/Sofbox-sass/WhyChooseUs'
import Feature from '~/components/Sofbox-sass/Feature'
import Team from '~/components/Sofbox-sass/Team'
import Testimonial from '~/components/Sofbox-sass/Testimonial'
import Pricing from '~/components/Sofbox-sass/Pricing'
import Blogs from '~/components/Sofbox-sass/Blogs'
import Client from '~/components/Sofbox-sass/Client'
import Home from '~/components/Sofbox-sass/Home'
export default {
  name: 'Index',
  layout: 'SofboxSass',
  components: {
    Home,
    Client,
    Blogs,
    Pricing,
    Testimonial,
    Team,
    Feature,
    HowItWork,
    AboutUs,
    AboutFeature,
    Footer,
    WhyChooseUs
  },
  mounted () {
    sofbox.index()
  }
}
</script>
