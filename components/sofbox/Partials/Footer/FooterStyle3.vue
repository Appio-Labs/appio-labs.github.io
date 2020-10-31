<template>
  <section class="footer-info iq-ptb-0">
    <div class="container">
      <!--<div class="row">-->
        <!--<div class="col-md-6 col-lg-3">
          <div class="iq-footer-box text-left">
            <div class="iq-icon">
              <i aria-hidden="true" class="ion-ios-location-outline" />
            </div>
            <div class="footer-content">
              <h4 class="iq-tw-7 iq-pb-10">
                Address
              </h4>
              <slot name="address" />
            </div>
          </div>
        </div>-->
        <!--<div class="col-md-6 col-lg-3 r4-mt-30">
          <div class="iq-footer-box text-left">
            <div class="iq-icon">
              <i aria-hidden="true" class="ion-ios-telephone-outline" />
            </div>
            <div class="footer-content">
              <h4 class="iq-tw-7 iq-pb-10">
                Phone
              </h4>
              <slot name="phone" />
            </div>
          </div>
        </div>-->
        <!--<div class="col-md-6 col-lg-3 r-mt-30">
          <div class="iq-footer-box text-left">
            <div class="iq-icon">
              <i aria-hidden="true" class="ion-ios-email-outline" />
            </div>
            <div class="footer-content">
              <h4 class="iq-tw-7 iq-pb-10">
                Mail
              </h4>
              <slot name="mail" />
            </div>
          </div>
        </div>-->
        <!--<div class="col-md-6 col-lg-3 r-mt-30">
          <ul class="info-share">
            <slot name="links" />
          </ul>
        </div>-->
        <!--<slot />
      </div>-->
      <div class="row justify-content-center iq-pt-40">
          <div class="text-center iq-plr-40">
              <li><a href="https://twitter.com/appio18"><i class="fab fa-twitter" /></a></li>
          </div>
          <div class="text-center iq-plr-40">
              <li><a href="https://www.facebook.com/appio.staff.9"><i class="fab fa-facebook" /></a></li>
          </div>
          <div class="text-center iq-plr-40">
              <li><a href="https://www.linkedin.com/company/appio-ou"><i class="fab fa-linkedin" /></a></li>
          </div>
          <div class="text-center iq-plr-40">
              <li><a href="https://github.com/Appio-Labs"><i class="fab fa-github" /></a></li>
          </div>
      </div>
      <div class="row">
        <div class="col-sm-12 text-center">
          <div class="footer-copyright iq-pt-20 iq-font-white">
           <span id="copyright">{{$t('copyright.year')}}</span> <a href="javascript:void(0)" class="text-green">Appio OÜ.</a> {{$t('copyright.rights')}}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FooterStyle3'
}
</script>
