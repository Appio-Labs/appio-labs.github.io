<template>
  <div>
    <section id="how-it-works" class="overview-block-ptb it-works">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="heading-title">
              <h3 class="title iq-tw-7">What is appio?</h3>
              <p>Appio brings together a community of software developers & architects, and partners with other experts in the industry to provide you with the best team to help you transform your idea into a powerful and scalable product.</p>
            </div>
          </div>
        </div>
        <div class="row heading-title">
          <div class="col-md-12 col-lg-4">
            <CardStyle5 step="1">
              <img slot="cardMedia" src="../../assets/images/services/icon1.png" class="img-fluid center-block" alt="#">
              <div slot="cardBody">
                <h5 class="iq-tw-7 iq-mt-25 iq-mb-15">
                  Web Development
                </h5>
                <p>Our web designers and developers are dedicated to creating powerful, effective and engaging websites. Our bold design style and use of ultra-clean combine to produce high quality products.</p>
              </div>
            </CardStyle5>
          </div>
          <div class="col-md-12 col-lg-4 r-mt-30">
            <CardStyle5 step="2">
              <img slot="cardMedia" src="../../assets/images/services/icon2.png" class="img-fluid" alt="#">
              <div slot="cardBody">
                <h5 class="iq-tw-7 iq-mt-25 iq-mb-15">
                  Mobile Development
                </h5>
                <p>Our mobile app developers have over a decade-long expertise in building solutions that meet market needs, empower companies’ brand identity, and encourage business growth and expansion.</p>
              </div>
            </CardStyle5>
          </div>
          <div class="col-md-12 col-lg-4 r-mt-30">
            <CardStyle5 step="3">
              <img slot="cardMedia" src="../../assets/images/services/icon3.png" class="img-fluid" alt="#">
              <div slot="cardBody">
                <h5 class="iq-tw-7 iq-mt-25 iq-mb-15">
                  Software Architecture
                </h5>
                <p>We do initial business analytics of the solution and create architecture of the future product, offering a full cycle of application design, integration, support and management services.</p>
              </div>
            </CardStyle5>
          </div>
        </div>
      </div>
    </section>
    <ParallaxStyle1 class-names="overview-block-pt iq-ptb-100 iq-counter-box iq-bg-over iq-over-blue-90 iq-font-white iq-parallax" :bg-image="image" ids="counter">
    <div class="container">
      <div class="row">
        <div class="iq-objectsnew">
          <span class="iq-objects-02" data-bottom="transform:translatey(50px)" data-top="transform:translatey(-100px);">
            <img src="../../assets/images/drive/03.png" class="img-fluid" alt="drive02">
          </span>
          <span class="iq-objects-03" data-bottom="transform:translatex(50px)" data-top="transform:translatex(-100px);">
            <img src="../../assets/images/drive/04.png" class="img-fluid" alt="drive02">
          </span>
          <span class="iq-objects-04 iq-fadebounce">
            <span class="iq-round"></span>
          </span>
        </div>
      <div slot="cardBody" class="col-lg-6 iq-pt-60">
        <div class="heading-title left text-left white">
          <h3 class="iq-tw-7 iq-mb-25 title">
            What can appio do?
          </h3>
        </div>
        <p>With appio you can create beautiful and elegant websites and apps that suits your business. </p>
        <p class="iq-mt-20">
          Whether you go native, cross-platform, or web, we’re sure that we can create something ideal for you. Our goal is to make your vision a reality.
        </p>
        <!--<h6 class="iq-tw-6 iq-mb-15 iq-mt-25">
          Discover our best ever services.
        </h6>
        <a href="javascript:void(0)" class="button iq-mt-20">Click Here</a>-->
      </div>
      <div slot="cardMedia" class="col-lg-6 align-self-center">
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
            Software Features
          </h3>
        </div>
        <p>Appio offers a variety of design and development services, from creating software development solutions and responsive designs, to building custom experiences using the latest and proven technologies.</p>
        <ul class="iq-mt-40 iq-list">
          <li class="iq-tw-6 iq-mb-15">
            <i class="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30"></i><span class="iq-font-black">Consulting and prototyping.</span>
          </li>
          <li class="iq-tw-6 iq-mb-15">
            <i class="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30"></i><span class="iq-font-black">UI/UX design.</span>
          </li>
          <li class="iq-tw-6 iq-mb-15">
            <i class="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30"></i><span class="iq-font-black">Custom software development.</span>
          </li>
          <li class="iq-tw-6 iq-mb-15">
            <i class="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30"></i><span class="iq-font-black">Automated QA and testing.</span>
          </li>
          <li class="iq-tw-6 iq-mb-15">
            <i class="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30"></i><span class="iq-font-black">Maintenance and post-warranty support.</span>
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
