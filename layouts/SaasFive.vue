<template>
  <div>
    <div id="loading">
      <div id="loading-center">
        <img src="../assets/sofbox-v2/images/loader.gif" alt="loader">
      </div>
    </div>
    <VTwoHeaderStyle1 :logo-img="logo" :nav-item-list="navItems" :styled-logo="styleLogo" class-name="iq-gradient main-header" :logo-white="logoWhite" />
    <nuxt />
    <ScrollTop />
  </div>
</template>
<script>
import logoImg from '../assets/sofbox-v2/images/logo.png'
import logoWhite from '../assets/sofbox-v2/images/logo-white.png'
import { saasmenu } from '~/config/constant'
export default {
  name: 'SaasFive',
  data () {
    return {
      styleLogo: false,
      logo: logoImg,
      logoWhite,
      navItems: [
        {
          href: '#iq-home',
          title: 'Home',
          active: true,
          children: true,
          child: saasmenu
        },
        { href: '#iq-service', title: 'Service' },
        { href: '#iq-feature', title: 'Feature' },
        { href: '#iq-testimonial', title: 'Testimonial' },
        { href: '#iq-blog', title: 'Blog' },
        { href: '#iq-contact', title: 'Contact Us' }
      ]
    }
  },
  mounted () {},
  head () {
    return {
      bodyAttrs: {
        'data-spy': 'scroll',
        'data-offset': '80'
      }
    }
  }
}
</script>
<style>
@import url('../assets/sofbox-v2/css/variable/saasfive-variable.css');
@import url("../assets/sofbox-v2/css/typography.css");
@import url("../assets/sofbox-v2/css/sofbox-style.css");
@import url("../assets/sofbox-v2/css/responsive.css");
</style>
