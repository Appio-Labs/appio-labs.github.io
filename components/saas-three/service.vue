<template>
  <section>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <VTwoSectionTitle :title-section-prop="titleSectionProp" />
        </div>
      </div>
      <div class="row justify-content-center">
        <div v-for="(list,index) in List" :key="index" class="col-lg-4">
          <div class="about-style wow fadeInUp text-center " :class="list.classColor" data-wow-delay="0.4s">
            <div class="holder">
              <div v-if="index != Object.keys(List).length - 1" class="loader-dot">
                <div />
                <div />
                <div />
              </div>
            </div>
            <VTwoCardStyle1 :image="list.image" :title="list.title" :text="list.description" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Service',
  data () {
    return {
      last: false,
      titleSectionProp: {
        title: 'Sofbox, the platform you deserve',
        description: 'If you are planning on developing a product landing app or website, take a look at this beautiful-crafted'
      },

      List: [
        { title: 'Fast Setup', image: require('../../assets/sofbox-v2/images/home-1/01.png'), description: 'There are many variations of passages of Lorem Ipsum available', classColor:'purple-hover' },
        { title: 'Integrations', image: require('../../assets/sofbox-v2/images/home-1/02.png'), description: 'There are many variations of passages of Lorem Ipsum available', classColor:'org-hover'},
        { title: 'Data Sources', image: require('../../assets/sofbox-v2/images/home-1/03.png'), description: 'There are many variations of passages of Lorem Ipsum available',classColor:'green-hover' }
      ]
    }
  }
}
</script>
