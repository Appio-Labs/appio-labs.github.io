<template>
  <div>
    <div id="loading">
      <div id="loading-center">
        <img src="../assets/sofbox-v2/images/loader-2.gif" alt="loader">
      </div>
    </div>
    <VTwoHeaderStyle1 :logo-img="logo" :nav-item-list="navItems" :styled-logo="styleLogo" :logo-white="logo" />
    <nuxt />
    <ScrollTop />
  </div>
</template>
<script>
import logoImg from '../assets/sofbox-v2/images/logo-2.png'
import { saasmenu } from '~/config/constant'
export default {
  name: 'SaasFour',
  data () {
    return {
      styleLogo: false,
      logo: logoImg,
      navItems: [
        {
          href: '#iq-home',
          title: 'Home',
          active: true,
          children: true,
          child: saasmenu
        },
        { href: '#iq-about', title: 'About Us' },
        { href: '#iq-feature', title: 'Feature' },
        { href: '#iq-portfolio', title: 'Portfolio' },
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
@import url('../assets/sofbox-v2/css/variable/saasfour-variable.css');
@import url("../assets/sofbox-v2/css/typography.css");
@import url("../assets/sofbox-v2/css/sofbox-style.css");
@import url("../assets/sofbox-v2/css/responsive.css");
</style>
