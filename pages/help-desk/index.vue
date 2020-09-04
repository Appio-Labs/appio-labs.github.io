<template>
  <div>
    <Home id="iq-home" />
    <div class="main-content">
      <features />
      <developement />
      <about id="iq-about" />
      <services id="iq-services" />
      <pricing />
      <blog id="iq-blog" />
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
import Home from '../../components/help-desk/home'
import features from '../../components/help-desk/features'
import developement from '../../components/help-desk/developement'
import about from '../../components/help-desk/about'
import services from '../../components/help-desk/services'
import pricing from '../../components/help-desk/pricing'
import blog from '../../components/help-desk/blog'
import footerLogo from '../../assets/sofbox-v2/images/home-2/logo-white.png'
export default {
  layout: 'HelpDesk',
  components: {
    Home,
    features,
    developement,
    about,
    services,
    pricing,
    blog
  },
  data () {
    return {
      footerLogo,
      footerText: 'It is a long established fact that a reader will be distracted by the readable content.',
      footerTitle: 'Ready to get started?',
      footerDescription: 'It is a long established fact that a page when looking at its layout.',
      List: [
        { name: 'Walhan Bobe', design: 'CEO Sofbox', image: require('../../assets/sofbox-v2/images/home-2/215.jpeg'), description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.' },
        { name: 'Walhan Bobe', design: 'CEO Sofbox', image: require('../../assets/sofbox-v2/images/home-2/216.jpeg'), description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.' },
        { name: 'Walhan Bobe', design: 'CEO Sofbox', image: require('../../assets/sofbox-v2/images/home-2/217.jpeg'), description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.' }
      ]
    }
  },
  mounted () {
    setTimeout(function () {
      sofbox.index()
      sofbox.initRevSliderHelpDesk()
    }, 1000)
  }
}
</script>
