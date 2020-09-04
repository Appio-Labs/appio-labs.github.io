<template>
  <div>
    <div class="banner-overlap">
      <Home id="iq-home" />
    </div>
    <div class="main-content overflow">
      <section class="mt-0 mb-0 pt-0 pb-0 pt-lg-5 pb-lg-5 mt-lg-5 mb-lg-5" />
      <about id="iq-about" />
      <services />
      <feature id="iq-feature" />
      <counter />
      <team id="iq-team" />
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
          <VTwoTestimonialCarousel :testimonial-list="List" />
        </div>
      </template>
    </VTwoFooterStyle2>
  </div>
</template>
<script>
import { sofbox } from '../../assets/app/app'
import Home from '../../components/payment-software/home'
import about from '../../components/payment-software/about'
import services from '../../components/payment-software/services'
import feature from '../../components/payment-software/feature'
import counter from '../../components/payment-software/counter'
import team from '../../components/payment-software/team'
import footerLogo from '../../assets/sofbox-v2/images/home-2/logo-white.png'
export default {
  layout: 'PaymentSoftware',
  components: {
    Home,
    about,
    services,
    feature,
    counter,
    team
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
      sofbox.initRevSliderPaymentSoftware()
    }, 1000)
  }
}
</script>
