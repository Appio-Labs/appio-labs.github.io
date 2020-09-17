<template>
  <section id="iq-about">
    <div class="container">
      <div class="row pt-4 pr-3 pl-3 fancy-service-list wow fadeInUp text-center">
        <div v-for="(list,index) in List" :key="index" class="col-lg-4 col-md-6 col-sm-12">
          <div class="fancy-service-detail">
            <div class="iq-img">
              <img :src="list.image" class="fancy-list-img" alt="fancy-list"><i class="ion ion-checkmark" />
            </div>
            <h5>{{ list.title }}</h5>
            <p class="mb-0">
              {{ list.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'About',
  data () {
    return {
      List: [
        { title: 'Connect your cloud', image: require('../../assets/sofbox-v2/images/home-6/600.png'), description: 'There are many variations of passages of Lorem Ipsum available, in' },
        { title: 'Choose a domain', image: require('../../assets/sofbox-v2/images/home-6/602.png'), description: 'There are many variations of passages of Lorem Ipsum available, in' },
        { title: 'Add Your Content', image: require('../../assets/sofbox-v2/images/home-6/613.png'), description: 'There are many variations of passages of Lorem Ipsum available, in' }
      ]
    }
  }
}
</script>
