<template>
  <div>
    <section id="how-it-works" class="overview-block-ptb it-works">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="heading-title">
              <h3 class="title iq-tw-7"> {{ $t('about.title') }} </h3>
              <p>{{ $t('about.introduction') }}</p>
            </div>
          </div>
        </div>
        <div class="row heading-title">
          <div class="col-md-12 col-lg-3">
            <CardStyle5 step="1">
              <img slot="cardMedia" src="../../assets/images/services/icon1.png" class="img-fluid center-block" alt="web development">
              <div slot="cardBody">
                <h5 class="iq-tw-7 iq-mt-25 iq-mb-15">
                  {{ $t('about.web.title') }}
                </h5>
                <p>{{ $t('about.web.description') }}</p>
              </div>
            </CardStyle5>
          </div>
          <div class="col-md-12 col-lg-3 r-mt-30">
            <CardStyle5 step="2">
              <img slot="cardMedia" src="../../assets/images/services/icon2.png" class="img-fluid" alt="mobile development">
              <div slot="cardBody">
                <h5 class="iq-tw-7 iq-mt-25 iq-mb-15">
                  {{ $t('about.mobile.title') }}
                </h5>
                <p>{{ $t('about.mobile.description') }}</p>
              </div>
            </CardStyle5>
          </div>
          <div class="col-md-12 col-lg-3 r-mt-30">
            <CardStyle5 step="3">
              <img slot="cardMedia" src="../../assets/images/services/icon3.png" class="img-fluid" alt="automation testing">
              <div slot="cardBody">
                <h5 class="iq-tw-7 iq-mt-25 iq-mb-15">
                  {{ $t('about.qa.title') }}
                </h5>
                <p>{{ $t('about.qa.description') }}</p>
              </div>
            </CardStyle5>
          </div>
          <div class="col-md-12 col-lg-3 r-mt-30">
            <CardStyle5 step="4">
              <img slot="cardMedia" src="../../assets/images/services/icon4.png" class="img-fluid" alt="design">
              <div slot="cardBody">
                <h5 class="iq-tw-7 iq-mt-25 iq-mb-15">
                  {{ $t('about.design.title') }}
                </h5>
                <p>{{ $t('about.design.description') }}</p>
              </div>
            </CardStyle5>
          </div>
        </div>
      </div>
    </section>
    <ParallaxStyle1 class-names="iq-banner-03 overview-block-pt iq-ptb-100 iq-counter-box iq-bg-over iq-over-blue-50 iq-font-white iq-parallax" :bg-image="image" ids="counter">
    <div class="container">
      <div class="row">
        <div class="iq-objectsnew">
          <!--<span class="iq-objects-02" data-bottom="transform:translatey(50px)" data-top="transform:translatey(-100px);">
            <img src="../../assets/images/drive/03.png" class="img-fluid" alt="drive02">
          </span>
          <span class="iq-objects-03" data-bottom="transform:translatex(50px)" data-top="transform:translatex(-100px);">
            <img src="../../assets/images/drive/04.png" class="img-fluid" alt="drive02">
          </span>-->
          <span class="iq-objects-04 iq-fadebounce">
            <span class="iq-round"></span>
          </span>
        </div>
      <div slot="cardBody" class="col-lg-6 iq-pt-60">
        <div class="heading-title left text-left white">
          <h3 class="iq-tw-7 iq-mb-25 title">
            {{ $t('service.title') }}
          </h3>
        </div>
        <p> 
          {{ $t('service.description1') }}
        </p>
        <p class="iq-mt-20">
          {{ $t('service.description2') }}
        </p>
        <h6 class="iq-tw-6 iq-mb-15 iq-mt-50">
          {{ $t('service.description3') }}
        </h6>
        <a href="javascript:void(0)" class="button iq-mt-20">{{ $t('service.button') }}</a>
      </div>
      <div slot="cardMedia" class="col-lg-6 align-self-center iq-pb-100">
        <img class="iq-works-img pull-right img-fluid" src="../../assets/images/drive/01.png" alt="drive01">
      </div>
      
      </div>
      </div>
    </ParallaxStyle1>
    <SectionStyle2 id="software-features" :small="small" >
      <div slot="cardMedia" class="iq-software-demo">
        <img class="img-fluid" src="../../assets/images/drive/05.png" alt="drive05">
      </div>
      <div slot="cardBody" class="col-lg-6 offset-lg-6">
        <div class="heading-title left text-left">
          <h3 class="iq-tw-7 iq-mtb-25 title">
            {{ $t('features.title') }}
          </h3>
        </div>
        <p>{{ $t('features.description') }}</p>
        <ul class="iq-mt-40 iq-list">
          <li class="iq-tw-6 iq-mb-15">
            <i class="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30"></i><span class="iq-font-black">{{ $t('features.feature1') }}</span>
          </li>
          <li class="iq-tw-6 iq-mb-15">
            <i class="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30"></i><span class="iq-font-black">{{ $t('features.feature2') }}</span>
          </li>
          <li class="iq-tw-6 iq-mb-15">
            <i class="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30"></i><span class="iq-font-black">{{ $t('features.feature3') }}</span>
          </li>
          <li class="iq-tw-6 iq-mb-15">
            <i class="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30"></i><span class="iq-font-black">{{ $t('features.feature4') }}</span>
          </li>
          <li class="iq-tw-6 iq-mb-15">
            <i class="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30"></i><span class="iq-font-black">{{ $t('features.feature5') }}</span>
          </li>
        </ul>
      </div>
    </SectionStyle2>
  </div>
</template>
<script>
export default {
  name: 'About',
  data () {
    return {
      small: true,
      image: require('../../assets/images/bg/02.jpg')
    }
  }
}
</script>
