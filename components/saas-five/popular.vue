<template>
  <section class="pt-0 pb-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <VTwoSectionTitle :title-section-prop="titleSectionProp" />
          <div v-for="(list,index) in lists" :key="index" class="fancy-icon wow fadeInUp  text-left">
            <div class="media">
              <div class="fancy-img">
                <img :src="list.img" alt="fancybox">
              </div>
              <div class="media-body">
                <h5 class="mt-0">
                  {{ list.title }}
                </h5>
                <p class="mb-0">
                  {{ list.subtitle }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <img src="../../assets/sofbox-v2/images/home-8/907.png" alt="fancybox">
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Popular',
  data () {
    return {
      titleSectionProp: {
        title: 'Popular features that your business needs',
        description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!',
        class: 'text-left'
      },
      lists: [
        {
          img: require('../../assets/sofbox-v2/images/home-8/905.png'),
          title: 'Virtual Card',
          subtitle: 'There are many variations of passages of Lorem Ipsum available.'
        },
        {
          img: require('../../assets/sofbox-v2/images/home-8/906.png'),
          title: 'Buyer Protection',
          subtitle: 'There are many variations of passages of Lorem Ipsum available.'
        }
      ]
    }
  }
}
</script>
