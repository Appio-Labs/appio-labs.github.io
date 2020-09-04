<template>
  <div>
    <Home id="iq-home" />
    <div class="main-content pt-5">
      <platform />
      <service />
      <about id="iq-about" />
      <sales />
      <feature id="iq-feature" />
      <portfolio />
      <testimonial id="iq-team" />
      <post />
      <contact />
    </div>
    <VTwoFooterStyle1 :footerText="footerText" :footerLogo="footerLogo">
      <template v-slot:menu>
        <ul>
          <li><a href="javascript:void(0)">About Us</a></li>
          <li><a href="javascript:void(0)">Theme</a></li>
          <li><a href="javascript:void(0)">Features</a></li>
          <li><a href="javascript:void(0)">Pricing</a></li>
          <li><a href="javascript:void(0)">Blog</a></li>
        </ul>
      </template>
      <template v-slot:aboutus>
        <ul>
          <li><a href="javascript:void(0)">About Sofbox</a></li>
          <li><a href="javascript:void(0)">Roadmap</a></li>
          <li><a href="javascript:void(0)">How it Work</a></li>
          <li><a href="javascript:void(0)">Team</a></li>
          <li><a href="javascript:void(0)">News</a></li>
        </ul>
      </template>
      <template v-slot:quicklink>
        <ul>
          <li><a href="javascript:void(0)">About Us</a></li>
          <li><a href="javascript:void(0)">Theme</a></li>
          <li><a href="javascript:void(0)">Features</a></li>
          <li><a href="javascript:void(0)">Pricing</a></li>
          <li><a href="javascript:void(0)">Blog</a></li>
        </ul>
      </template>
    </VTwoFooterStyle1>
  </div>
</template>
<script>
import { sofbox } from '../../assets/app/app'
import Home from '../../components/saas-three/home'
import Platform from '../../components/saas-three/platform'
import service from '../../components/saas-three/service'
import about from '../../components/saas-three/about'
import Sales from '../../components/saas-three/sales'
import feature from '../../components/saas-three/feature'
import portfolio from '../../components/saas-three/portfolio'
import testimonial from '../../components/saas-three/testimonial'
import post from '../../components/saas-three/post'
import contact from '../../components/saas-three/contact'
import footerLogo from '../../assets/sofbox-v2/images/home-1/35.png'
// import Home from '../../components/saas-two/Home'
export default {
  layout: 'SaasThree',
  components: {
    Home,
    Platform,
    service,
    about,
    Sales,
    feature,
    portfolio,
    post,
    testimonial,
    contact
  },
  data () {
    return {
      footerLogo,
      footerText: 'It is a long established fact that a reader will be distracted by the readable content.',
      footerTitle: 'Ready to get started?',
      footerDescription: 'It is a long established fact that a page when looking at its layout.'
    }
  },

  mounted () {
    setTimeout(function () {
      sofbox.index()
      sofbox.initRevSliderSaasThree()
    }, 1000)
  }
}
</script>
