<template>
  <section class="pt-0">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <VTwoSectionTitle :title-section-prop="titleSectionProp" />
        </div>
      </div>
      <div class="row">
        <div v-for="(list,index) in List" :key="index" class="col-lg-6">
          <div class="Service-box text-left">
            <div class="container">
              <div class="row row-eq-height align-items-center">
                <div class="col-sm-4">
                  <img :src="list.image" alt="fancybox">
                </div>
                <div class="col-sm-8">
                  <div class="content">
                    <h5 class="mb-2">
                      {{ list.title }}
                    </h5>
                    <p class="mb-4">
                      {{ list.description }}
                    </p>
                    <a class="blue-btn button" href="#">{{ list.linkText }}</a>
                  </div>
                </div>
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
  name: 'Services',
  data () {
    return {
      titleSectionProp: {
        title: 'Best Ever Services Sofbox',
        description: 'If you are planning on developing a product landing app or website, take a look at this beautiful-crafted'
      },

      List: [
        { title: 'About Documentation', description: 'There are many variations of passages of Lorem Ipsum available.', linkText: 'Find out More', image: require('../../assets/sofbox-v2/images/home-5/506.jpeg') },
        { title: 'Start your business on', description: 'There are many variations of passages of Lorem Ipsum available.', linkText: 'Find out More', image: require('../../assets/sofbox-v2/images/home-5/507.jpeg') }
      ]
    }
  }
}
</script>
