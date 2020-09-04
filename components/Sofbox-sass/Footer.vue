<template>
  <FooterMain footer-class="iq-footer">
    <template v-slot:footerContent>
      <div class="row">
        <div class="col-md-12">
          <div class="footer-top">
            <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-6 iq-mtb-20">
                <FooterLogo
                  :section-image="navLogo"
                  section-color="white iq-font-black mb-4 mt-4"
                  section-text="Simply dummy text of the printing and typesetting industry."
                >
                  <ul class="social-links">
                    <li v-for="(option,index) in socialNavItems" :key="index" class="list-inline">
                      <a href="javascript:void(0)"><i :class="option.class" /></a>
                    </li>
                  </ul>
                </FooterLogo>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 iq-mtb-20">
                <FooterLinks title="Menu" color="white mb-4" :content="footerHome" />
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 iq-mtb-20">
                <FooterAddress :address-content-="footerText" address-color="white mb-4" address-title="Address" />
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 iq-mtb-20">
                <h4 class="mb-4">
                  Get Started
                </h4>
                <form class="subscribe-form">
                  <input type="email" name="email" class="form-control subscription-email " placeholder="Email">
                  <a href="#" class="button">Sign Up</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row iq-mt-20 align-items-center">
        <div class="col-md-5 col-lg-4 col-sm-12">
          <ul class="links text-md-left">
            <li class="list-inline">
              <a href="#">Sofbox Terms</a>
            </li>
            <li class="list-inline">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-8 col-md-7 col-sm-12 iq-font-dark text-md-right">
          <div>
            © 2018 Sofbox Developed by <b>iqonicthemes</b>.
          </div>
        </div>
      </div>
    </template>
  </FooterMain>
</template>
<script>
import logoImg from '../../assets/sofbox-sass-black/images/footer-logo.png'
export default {
  name: 'Footer',
  data () {
    return {
      navLogo: logoImg,
      socialNavItems: [
        { class: ' fab fa-twitter' },
        { class: 'fab fa-facebook-f' },
        { class: 'fab fa-google' },
        { class: 'fab fa-github' }
      ],
      footerText: [
        {
          icon: true,
          iconClass: 'ion-ios-location-outline',
          text: '1234 North Luke Lane, South Bend, IN 360001'
        },
        {
          icon: true,
          iconClass: 'ion-ios-telephone-outline',
          text: '+0123 456 789'
        },
        {
          icon: true,
          iconClass: 'ion-ios-email-outline',
          text: 'mail@sofbox.com'
        }
      ],
      footerHome: [
        {
          section: [
            {
              href: 'javascript:void(0)',
              title: 'Home'
            },
            {
              href: 'javascript:void(0)',
              title: 'About us'
            },
            {
              href: 'javascript:void(0)',
              title: 'Our team'
            },
            {
              href: 'javascript:void(0)',
              title: 'Portfolio'
            }
          ]
        },
        {
          section: [
            {
              href: 'javascript:void(0)',
              title: 'FAQs'
            },
            {
              href: 'javascript:void(0)',
              title: 'Blog'
            },
            {
              href: 'javascript:void(0)',
              title: 'Our services'
            },
            {
              href: 'javascript:void(0)',
              title: 'Contact us'
            }
          ]
        }
      ]

    }
  }
}
</script>
