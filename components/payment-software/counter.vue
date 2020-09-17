<template>
  <section class="main-bg overflow-hidden">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <VTwoSectionTitle :title-section-prop="titleSectionProp" />
          <div class="row">
            <div v-for="(list,index) in counterList" :key="index" class="col-lg-4">
              <div class="iq-timer counter-vertical">
                <div class="timer-details">
                  <div class="border-effect">
                    <div class="title-saas" />
                  </div>
                  <span :CountTo="list.value" :from="0" :duration="5" class="timer">{{ list.value }}</span>
                  <span class="total-cust">{{ list.cost }}</span>
                  <i class="ion-android-add" aria-hidden="true" />
                  <p class="mb-lg-0 mb-4">
                    {{ list.title }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="mobile-effect">
            <div class="img-one wow fadeInRight" data-wow-delay="0.4s">
              <img src="../../assets/sofbox-v2/images/home-2/211.png" alt="image1">
            </div>
            <div class="img-two wow fadeInRight" data-wow-delay="0.6s">
              <img src="../../assets/sofbox-v2/images/home-2/212.png" alt="image2">
            </div>
            <div class="img-three wow fadeInRight" data-wow-delay="0.8s">
              <img src="../../assets/sofbox-v2/images/home-2/213.png" alt="image3">
            </div>
            <div class="img-four wow fadeInRight" data-wow-delay="1s">
              <img src="../../assets/sofbox-v2/images/home-2/212.png" alt="image4">
            </div>
            <div class="img-five wow fadeInRight" data-wow-delay="1.2s">
              <img src="../../assets/sofbox-v2/images/home-2/211.png" alt="image5">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Counter',
  data () {
    return {
      titleSectionProp: {
        title: 'Join our global community and get access',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        class: 'text-left',
        titleClass: 'text-white',
        descClass: 'text-white'
      },

      counterList: [
        { title: 'Customers', value: '40', cost: 'M' },
        { title: 'Transactions', value: '150', cost: 'M' },
        { title: 'Total value', value: '50', cost: 'B', price: '' }
      ]
    }
  }
}
</script>
