<template>
  <div>
    <Home id="iq-home" />
    <div class="main-content overflow">
      <about id="iq-about" />
      <pricing />
      <feature id="iq-feature" />
      <mapping />
      <counter />
      <serviceTabs />
      <testimonial id="iq-blog" />
      <blog />
    </div>
    <VTwoFooterStyle2
      :footer-logo="footerLogo"
      :footer-text="footerText"
      :footer-title="footerTitle"
      :footer-description="footerDescription"
      :footerClass="footerClass"
      :buttonClass=" buttonClass"
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
import about from '../../components/cloud-hosting/about'
import Home from '../../components/cloud-hosting/home'
import Pricing from '../../components/cloud-hosting/pricing'
import feature from '../../components/cloud-hosting/feature'
import mapping from '../../components/cloud-hosting/mapping'
import counter from '../../components/cloud-hosting/counter'
import serviceTabs from '../../components/cloud-hosting/serviceTabs'
import testimonial from '../../components/cloud-hosting/testimonial'
import blog from '../../components/cloud-hosting/blog'
import footerLogo from '../../assets/sofbox-v2/images/home-2/logo-white.png'
export default {
  layout: 'CloudHosting',
  components: {
    Home,
    about,
    Pricing,
    feature,
    mapping,
    counter,
    serviceTabs,
    testimonial,
    blog
  },
  data () {
    return {
      footerLogo,
      footerText: 'It is a long established fact that a reader will be distracted by the readable content.',
      footerTitle: 'Ready to get started?',
      footerDescription: 'It is a long established fact that a page when looking at its layout.',
      footerClass: 'blue-bg',
      buttonClass: 'blue-btn',
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
      sofbox.initRevSliderCloudHosting()
    }, 1000)
  }
}
</script>
