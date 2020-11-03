<template>
  <div>
    <Home />
    <div class="main-content">
      
      <About />
      <!--<Client />-->
      <!--<Specialities /> -->
      <!--<Counter />-->
      <!--<Testimonial />-->
      <!--<Pricing />-->
      <!--<Team />-->
      <!--<CompareService />-->
      <!--<Faq />-->
      <!--<Blog />-->
      <!--<Client />-->
      <footer id="contact-us">
        <ParallaxStyle1 :bg-image="require('~/assets/images/bg/01.jpg')" ids="iq-home" class-names="iq-pt-100 iq-pb-30 iq-newsletter iq-bg-over iq-over-blue-50 jarallax">
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="heading-title white iq-mb-25">
                  <h3 class="title iq-tw-7">
                    {{ $t('contact.title') }}
                  </h3>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
                <ContactForm class="col-lg-7" />
              <!--<div class="col-lg-7">
                <form class="form-inline">
                  <input type="text" name="email" value="..." autocomplete="username email" style="display: none;">
                  <div class="form-group">
                    <label for="inputPassword2" class="sr-only">Password</label>
                    <input id="inputPassword2" type="email" class="form-control" placeholder="Enter your email" autocomplete="new-password">
                  </div>
                  <a class="button bt-black iq-ml-25" href="javascript:void(0)">subscribe</a>
                </form>
              </div>-->
            </div>
            <FooterStyle3 class-names="iq-parallax">
          <!--<p slot="address">
            1234 North Avenue Luke Lane, South Bend, IN 360001
          </p>-->
          <!--<p slot="phone">
            +0123 456 789
            <br>Mon-Fri 8:00am - 8:00pm
            <br>
          </p>-->
          <!--<p slot="mail">
            helloappio@protonmail.com
            <br>24 X 7 online support
            <br>
          </p>-->
          <!--<ul slot="links">
            <li><a href="javascript:void(0)"><i class="fab fa-twitter" /></a></li>
            <li><a href="javascript:void(0)"><i class="fab fa-facebook" /></a></li>
            <li><a href="javascript:void(0)"><i class="fab fa-google" /></a></li>
            <li><a href="javascript:void(0)"><i class="fab fa-github" /></a></li>
          </ul>-->
          </FooterStyle3>
          
          </div>
           
        </ParallaxStyle1>
        <!--<Contact />-->
       
      </footer>
    </div>
    <!--<ColorCustomizer />-->
    <ScrollTop />
  </div>
</template>

<script>
import Home from '~/components/About/Home'
import About from '~/components/About/About'
import Specialities from '~/components/About/Specialities'
import Counter from '~/components/About/Counter'
import Testimonial from '~/components/About/Testimonial'
import Pricing from '~/components/About/Pricing'
import Team from '~/components/About/Team'
import CompareService from '~/components/About/CompareService'
import Faq from '~/components/About/Faq'
import Blog from '~/components/About/Blog'
import Client from '~/components/About/Client'
import Contact from '~/components/About/Contact'
import { sofbox } from '~/assets/app/app'


export default {
  layout: 'LandingPage1',
  components: {
    Home,
    About,
    Specialities,
    Counter,
    Testimonial,
    Pricing,
    Team,
    CompareService,
    Faq,
    Blog,
    Client,
    Contact
  },
  mounted () {
    setTimeout(function () {
      sofbox.index()
      // sofbox.magnific()
    }, 1000)
  }
}
</script>
