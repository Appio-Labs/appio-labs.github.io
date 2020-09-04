<template>
  <div>
    <Loader />
    <HeaderStyle3 :logo-img="logo" :nav-item-list="navItems" :styled-logo="true" class-name="main-bg" />
    <nuxt />
    <ScrollTop />
  </div>
</template>
<script>
// import { menu } from '../config/constant.js'
import logoImg from '../assets/sofbox-sass-black/images/logo.png'
import Loader from '~/components/sofbox/Loader'
export default {
  name: 'SofboxSass',
  components: { Loader },
  data () {
    return {
      styleLogo: false,
      logo: logoImg,
      navItems: [
        {
          href: '/sofbox-saas',
          title: 'Home',
          redirect: true,
          _is_active: true
        },
        { href: '/sofbox-saas#how-it-works', title: 'Service', redirect: true },
        { href: '/sofbox-saas#about-us', title: 'About Us', redirect: true },
        { href: '/sofbox-saas#feature', title: 'Feature', redirect: true },
        { href: '/sofbox-saas#team', title: 'Team', redirect: true },
        { href: '/sofbox-saas#testimonial', title: 'Testimonial', redirect: true },
        { href: '/sofbox-saas#pricing', title: 'Pricing', redirect: true },
        {
          href: '#blog',
          title: 'Blog',
          _is_active: false,
          children: true,
          child: [
            { href: '/sofbox-saas/blog-list', title: 'All Blog' },
            { href: '/sofbox-saas/blog-detail', title: 'Blog Detail' },
            { href: '/sofbox-saas/blog-detail-left-sidebar', title: 'Blog Details Left Sidebar' },
            { href: '/sofbox-saas/blog-detail-right-sidebar', title: 'Blog Details Right Sidebar' },
            { href: '/sofbox-saas/blog-list-left-sidebar', title: 'Blog Left Sidebar' },
            { href: '/sofbox-saas/blog-list-right-sidebar', title: 'Blog Right Sidebar' }
          ]
        },
        {
          href: '#pages',
          title: 'Pages',
          _is_active: true,
          children: true,
          child: [
            { href: '/sofbox-saas/404', title: '404 Error' },
            { href: '/sofbox-saas/coming-soon', title: 'Coming Soon' },
            { href: '/sofbox-saas/maintenance', title: 'Maintenance' }
          ]
        },

        { href: '/sofbox-saas/contact-us', title: 'Contact Us', redirect: true }
      ]
    }
  },
  beforeMount () {
  },
  head () {
    return {
      bodyAttrs: {
        'data-spy': 'scroll',
        'data-offset': '80',
        class: 'main-bg'
      }
    }
  }
}
</script>
<style>
  @import url('../assets/sofbox-sass-black/css/flaticon.css');
  @import url('../assets/sofbox-sass-black/css/typography.css');
  @import url('../assets/sofbox-sass-black/css/style.css');
  @import url('../assets/sofbox-sass-black/revslider/css/settings.css');
  @import url('../assets/sofbox-sass-black/css/responsive.css');
  .main-bg{
    background-size: cover !important;
  }
</style>
