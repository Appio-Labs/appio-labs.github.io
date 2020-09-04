<template>
  <div>
    <Home id="iq-home" />
    <div class="main-content">
      <howitworks id="iq-about" />
      <feature id="iq-feature" />
      <sales />
      <portfolio />
      <testimonial id="iq-testimonial" />
      <post id="iq-blog" />
    </div>
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
          <VTwoTestimonialCarousel :testimonialList="List" />
        </div>
      </template>
    </VTwoFooterStyle2>
  </div>
</template>
<script>
import { sofbox } from '../../assets/app/app'
import howitworks from '../../components/saas-two/howitworks'
import Home from '../../components/saas-two/home'
import feature from '../../components/saas-two/feature'
import sales from '../../components/saas-two/sales'
import portfolio from '../../components/saas-two/portfolio'
import testimonial from '../../components/saas-two/testimonial'
import post from '../../components/saas-two/post'
import footerLogo from '../../assets/sofbox-v2/images/home-2/logo-white.png'
export default {
  layout: 'SaasTwo',
  components: {
    Home,
    howitworks,
    feature,
    sales,
    portfolio,
    post,
    testimonial
  },
  data () {
    return {
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
          image: require('../../assets/sofbox-v2/images/home-2/215.jpeg'),
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.'
        },
        {
          name: 'Walhan Bobe',
          design: 'CEO Sofbox',
          image: require('../../assets/sofbox-v2/images/home-2/216.jpeg'),
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.'
        },
        {
          name: 'Walhan Bobe',
          design: 'CEO Sofbox',
          image: require('../../assets/sofbox-v2/images/home-2/217.jpeg'),
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.'
        }
      ]
    }
  },

  mounted () {
    setTimeout(function () {
      sofbox.index()
      sofbox.initRevSliderTwo()
    }, 1000)
  }
}
</script>
