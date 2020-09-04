<template>
  <div>
    <BlackBannerStyle1 title="Contact Us">
      <template v-slot:bannerLinks>
        <ol class="breadcrumb title">
          <li class="breadcrumb-item">
            <a href="index.html" class="">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Blogs
          </li>
        </ol>
      </template>
    </BlackBannerStyle1>
    <div class="main-content iq-contact">
      <!-- Contact Us -->
      <div class="iq-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.840108181602!2d144.95373631539215!3d-37.8172139797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1497005461921" />
      </div>
      <section class="iq-our-touch pt-0">
        <div class="container">
          <div class="iq-get-in ">
            <div class="row">
              <div class="col-lg-6 col-md-12 col-sm-12 iq-mtb-15">
                <h4 class="heading-left title text-white">
                  Get in Touch
                </h4>
                <form id="contact" method="post">
                  <div class="contact-form">
                    <div class="section-field iq-mt-10">
                      <input id="contact_name" class="require" type="text" placeholder="Name*" name="name">
                    </div>
                    <div class="section-field iq-mt-10">
                      <input id="contact_email" class="require" type="email" placeholder="Email*" name="email">
                    </div>
                    <div class="section-field iq-mt-10">
                      <input id="contact_phone" class="require" type="text" placeholder="Phone*" name="phone">
                    </div>
                    <div class="section-field textarea iq-mt-10">
                      <textarea id="contact_message" class="input-message require" placeholder="Comment*" rows="5" name="message" />
                    </div>
                    <a id="submit" href="" name="submit" class="button pull-right iq-mt-20">Send Message</a>
                  </div>
                </form>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 iq-mtb-15">
                <div class="contact-info  pt-0 ">
                  <h4 class="heading-left title text-white">
                    Contact Us
                  </h4>
                  <div class="iq-contact-box media mb-3">
                    <div class="iq-icon left">
                      <i aria-hidden="true" class="ion-ios-location-outline" />
                    </div>
                    <div class="contact-box right media-body">
                      <h5 class="iq-tw-6">
                        Address
                      </h5>
                      <p>1234 North Avenue Luke Lane, South Bend,IN 360001</p>
                    </div>
                  </div>
                  <div class=".iq-contact-box right media mb-3 ">
                    <div class="iq-icon left">
                      <i aria-hidden="true" class="ion-ios-telephone-outline" />
                    </div>
                    <div class="contact-box right media-body">
                      <h5 class="iq-tw-6">
                        Phone
                      </h5>
                      <span class="lead iq-tw-5">+0123 456 789</span>
                      <p class="">
                        Mon-Fri 8:00am - 8:00pm
                      </p>
                    </div>
                  </div>
                  <div class=".iq-contact-box right media mb-3 ">
                    <div class="iq-icon left">
                      <i aria-hidden="true" class="ion-ios-email-outline" />
                    </div>
                    <div class="contact-box right media-body">
                      <h5 class="iq-tw-6">
                        Mail
                      </h5>
                      <span class="lead iq-tw-5">support@appino.com</span>
                      <p class="">
                        24 X 7 online support
                      </p>
                    </div>
                  </div>
                  <ul class="social-links mt-5">
                    <li class="mr-5">
                      <a href="#"><i class="fab fa-facebook-f" /></a>
                    </li>
                    <li class="mr-5">
                      <a href="#"><i class="fab fa-twitter" /></a>
                    </li>
                    <li class="mr-5">
                      <a href="#"><i class="fab fa-google-plus-g" /></a>
                    </li>
                    <li class="mr-5">
                      <a href="#"><i class="fab fa-dribbble" /></a>
                    </li><li />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Contact Us End -->
    </div>
    <Footer />
  </div>
</template>

<script>
import { sofbox } from '../../assets/app/app'
import Footer from '../../components/Sofbox-sass/Footer'
export default {
  name: 'ContactUs',
  layout: 'SofboxSass',
  components: {
    Footer
  },
  mounted () {
    sofbox.index()
  }
}
</script>
