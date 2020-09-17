<template>
  <section class=" pb-0 position-relative overflow">
    <div class="platform-position">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h4 class="mb-4">
              Choose Your Platform
            </h4>
            <div class="bg-img-platform left ">
              <div v-for="(list,index) in List" :key="index" :data-wow-delay="list.delay" :class="list.subclass">
                <a :href="list.href">
                  <img :class="list.class" :src="list.image" :alt="'image'+index">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Platform',
  data () {
    return {
      List: [
        { image: require('../../assets/sofbox-v2/images/home-1/30.jpeg'), class: 'img-one', href: '#', delay: '0.2s', subclass: 'wow zoomIn d-inline mr-3' },
        { image: require('../../assets/sofbox-v2/images/home-1/31.jpeg'), class: 'img-two', href: '#', delay: '0.4s', subclass: 'wow zoomIn d-inline mr-3' },
        { image: require('../../assets/sofbox-v2/images/home-1/32.jpeg'), class: 'img-three', href: '#', delay: '0.6s', subclass: 'wow zoomIn d-inline mr-3' },
        { image: require('../../assets/sofbox-v2/images/home-1/33.jpeg'), class: 'img-four', href: '#', delay: '0.8s', subclass: 'wow zoomIn d-inline mr-3' },
        { image: require('../../assets/sofbox-v2/images/home-1/34.jpeg'), class: 'img-five', href: '#', delay: '0.8s', subclass: 'wow zoomIn d-inline' }
      ]
    }
  }
}
</script>
