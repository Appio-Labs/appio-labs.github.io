<template>
  <div>
    <Home />
    <div class="main-content">
      <About />
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
        <ParallaxStyle1 :bg-image="require('../../assets/images/bg/01.jpg')" ids="iq-home" class-names="iq-pt-100 iq-pb-30 iq-newsletter iq-bg-over iq-over-blue-50 jarallax">
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

<!-- The core Firebase JS SDK is always required and must be listed first -->
<!--<script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<!--<script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-analytics.js"></script>

<script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-performance.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCR5CwdgEmhgSU7kV6lcQnvjqTziI2s35s",
    authDomain: "appio-labs.firebaseapp.com",
    databaseURL: "https://appio-labs.firebaseio.com",
    projectId: "appio-labs",
    storageBucket: "appio-labs.appspot.com",
    messagingSenderId: "314386062516",
    appId: "1:314386062516:web:c31c7417a3872591874be1",
    measurementId: "G-GKV76DETS0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>-->

<script>
import Home from '../../components/LandingPage1/Home'
import About from '../../components/LandingPage1/About'
import Specialities from '../../components/LandingPage1/Specialities'
import Counter from '../../components/LandingPage1/Counter'
import Testimonial from '../../components/LandingPage1/Testimonial'
import Pricing from '../../components/LandingPage1/Pricing'
import Team from '../../components/LandingPage1/Team'
import CompareService from '../../components/LandingPage1/CompareService'
import Faq from '../../components/LandingPage1/Faq'
import Blog from '../../components/LandingPage1/Blog'
import Client from '../../components/LandingPage1/Client'
import Contact from '../../components/LandingPage1/Contact'
import { sofbox } from '../../assets/app/app'


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
