<template>
  <section class="pt-0">
    <div class="container">
      <div v-for="(list,index) in List" :key="index" :class="list.class != undefined && list.class ? 'row align-items-center'+' '+ list.class : 'row align-items-center' ">
        <div class="col-lg-6">
          <img :src="list.image" class="img-fluid" alt="img">
        </div>
        <div class="col-lg-6">
          <div class="fancy-list-box  wow fadeInUp  text-left">
            <div :class="'fancy-list-img' +' '+ list.hoverClass">
              {{ list.price }}
            </div>
            <div class="service-detail align-self-center">
              <h4 class="mb-2">
                {{ list.title }}
              </h4>
              <p>{{ list.description }}</p>
              <div class="text-left">
                <ul class="iq-list mb-5">
                  <li v-for="(service,index1) in list.services" :key="index1">
                    <i :class="service.class" />
                    <span>{{ service.title }}</span>
                  </li>
                </ul>
                <a class="button blue-btn gradient-btn button-icon" href="#"><span class="btn-effect"> Quickstart</span></a>
              </div>
            </div>
          </div>
        </div>
        <div v-if="list.arrow_image" class="col-lg-12 text-center">
          <img :src="list.arrow_image" class="img-fluid" alt="img">
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Pricing',
  data () {
    return {
      List: [
        {
          title: 'Starter',
          image: require('../../assets/sofbox-v2/images/home-6/602.png'),
          arrow_image: require('../../assets/sofbox-v2/images/home-6/603.png'),
          hoverClass: 'purple-hover',
          price: '$29',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          services: [
            { title: 'Single Domain', icon: 'ion ion-checkmark-round' },
            { title: '15 GB Disk Space', icon: 'ion ion-checkmark-round' },
            { title: '100 GB Transfer', icon: 'ion ion-checkmark-round' },
            { title: '5 Email Account ', icon: 'ion ion-checkmark-round' },
            { title: 'Free Domain Registration', icon: 'ion ion-checkmark-round' },
            { title: '99.9% Uptime Guarantee', icon: 'ion ion-checkmark-round' }
          ]
        },
        {
          title: 'Deluxe',
          image: require('../../assets/sofbox-v2/images/home-6/602.png'),
          arrow_image: require('../../assets/sofbox-v2/images/home-6/605.png'),
          class: 'flex-row-reverse',
          hoverClass: 'org-hover',
          price: '$29',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          services: [
            { title: 'Single Domain', icon: 'ion ion-checkmark-round' },
            { title: '15 GB Disk Space', icon: 'ion ion-checkmark-round' },
            { title: '100 GB Transfer', icon: 'ion ion-checkmark-round' },
            { title: '5 Email Account ', icon: 'ion ion-checkmark-round' },
            { title: 'Free Domain Registration', icon: 'ion ion-checkmark-round' },
            { title: '99.9% Uptime Guarantee', icon: 'ion ion-checkmark-round' }
          ]
        },
        {
          title: 'Ultimate',
          image: require('../../assets/sofbox-v2/images/home-6/602.png'),
          hoverClass: 'green-hover',
          price: '$29',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          services: [
            { title: 'Single Domain', icon: 'ion ion-checkmark-round' },
            { title: '15 GB Disk Space', icon: 'ion ion-checkmark-round' },
            { title: '100 GB Transfer', icon: 'ion ion-checkmark-round' },
            { title: '5 Email Account ', icon: 'ion ion-checkmark-round' },
            { title: 'Free Domain Registration', icon: 'ion ion-checkmark-round' },
            { title: '99.9% Uptime Guarantee', icon: 'ion ion-checkmark-round' }
          ]
        }
      ]
    }
  }
}
</script>
