<template>
  <div data-spy="scroll" data-offset="80">
    <div id="loading">
      <div id="loading-center">
        <img src="../assets/sofbox-v2/images/loader.gif" alt="loader">
      </div>
    </div>
    <VTwoHeaderStyle1 :logo-img="logo" :nav-item-list="navItems" :styled-logo="styleLogo" :logo-white="logo">
      <template v-slot:button>
        <li class="button-btn list-inline-item">
          <nav aria-label="breadcrumb">
            <div class="blue-btn button">
              <a href="#">Get Started</a>
            </div>
          </nav>
        </li>
      </template>
    </VTwoHeaderStyle1>
    <nuxt />
    <VTwoFooterStyle2
      :footer-logo="footerLogo"
      :footer-text="footerText"
      :footer-title="footerTitle"
      :footer-description="footerDescription"
    >
      <template v-slot:menu>
        <ul>
          <li>
            <a class="text-white" href="javascript:void(0)">About Us</a>
          </li>
          <li>
            <a class="text-white" href="javascript:void(0)">Theme</a>
          </li>
          <li>
            <a class="text-white" href="javascript:void(0)">Features</a>
          </li>
          <li>
            <a class="text-white" href="javascript:void(0)">Pricing</a>
          </li>
          <li>
            <a class="text-white" href="javascript:void(0)">Blog</a>
          </li>
        </ul>
      </template>
      <template v-slot:aboutus>
        <ul>
          <li>
            <a class="text-white" href="javascript:void(0)">About Sofbox</a>
          </li>
          <li>
            <a class="text-white" href="javascript:void(0)">Roadmap</a>
          </li>
          <li>
            <a class="text-white" href="javascript:void(0)">How it Work</a>
          </li>
          <li>
            <a class="text-white" href="javascript:void(0)">Team</a>
          </li>
          <li>
            <a class="text-white" href="javascript:void(0)">News</a>
          </li>
        </ul>
      </template>
      <template v-slot:testimonial>
        <div>
          <VTwoTestimonialCarousel :testimonial-list="List" />
        </div>
      </template>
    </VTwoFooterStyle2>
    <ScrollTop />
  </div>
</template>
<script>
import logoImg from '../assets/sofbox-v2/images/logo.png'
import footerLogo from '../assets/sofbox-v2/images/home-2/logo-white.png'
export default {
  name: 'SofboxVTwoLayout2',
  data () {
    return {
      styleLogo: false,
      logo: logoImg,
      footerLogo,
      footerText:
        'It is a long established fact that a reader will be distracted by the readable content.',
      footerTitle: 'Ready to get started?',
      footerDescription:
        'It is a long established fact that a page when looking at its layout.',
      List: [
        {
          name: 'Walhan Bobe',
          design: 'CEO Sofbox',
          image: require('../assets/sofbox-v2/images/home-2/215.jpeg'),
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.'
        },
        {
          name: 'Walhan Bobe',
          design: 'CEO Sofbox',
          image: require('../assets/sofbox-v2/images/home-2/216.jpeg'),
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.'
        },
        {
          name: 'Walhan Bobe',
          design: 'CEO Sofbox',
          image: require('../assets/sofbox-v2/images/home-2/217.jpeg'),
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.'
        }
      ],
      navItems: [
        {
          href: '/saas-six',
          title: 'Home',
          redirect: true,
          _is_active: true
        },
        {
          href: '#pages',
          title: 'Pages',
          _is_active: false,
          children: true,
          child: [
            { href: '/about-us', title: 'About Us' },
            { href: '/services', title: 'Services' },
            { href: '/pricing-plan', title: 'Pricing Plan' },
            { href: '/careers', title: 'Careers' },
            { href: '/faq', title: 'FAQ' },
            { href: '/team', title: 'Team' }
          ]
        },
        {
          href: '#portfolio',
          title: 'Portfolio',
          _is_active: false,
          children: true,
          child: [
            { href: '/portfolio2-columns', title: 'Portfolio 2 Columns' },
            { href: '/portfolio3-columns', title: 'Portfolio 3 Columns' },
            { href: '/portfolio4-columns', title: 'Portfolio 4 Columns' },
            { href: '/portfolio5-columns', title: 'Portfolio 5 Columns' },
            { href: '/portfolio-nospace', title: 'Portfolio No Space' },
            { href: '/portfolio-detail', title: 'Portfolio Detail' }
          ]
        },
        {
          href: '#blog',
          title: 'Blog',
          _is_active: false,
          children: true,
          child: [
            { href: '/blog', title: 'Blog' },
            { href: '/blog-detail', title: 'Blog Detail' },
            { href: '/blog-one-column', title: 'One Column Blog' },
            { href: '/blog-two-column', title: 'Two Column Blog' },
            { href: '/blog-three-column', title: 'Three Column Blog' },
            { href: '/blog-left-sidebar', title: ' Left Sidebar Grid' },
            { href: '/blog-right-sidebar', title: 'Right Sidebar Grid' }
          ]
        },

        { href: '/contact-us', title: 'Contact Us', redirect: true }
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
@import url('../assets/sofbox-v2/css/variable/saassix-variable.css');
@import url("../assets/sofbox-v2/css/typography.css");
@import url("../assets/sofbox-v2/css/sofbox-style.css");
@import url("../assets/sofbox-v2/css/responsive.css");
</style>
