<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <VTwoSectionTitle :title-section-prop="titleSectionProp" />
        </div>
      </div>
      <div class="row bg-box pt-4 pr-3 pl-3">
        <div v-for="(list,index) in List" :key="index" class="col-lg-3 col-md-6">
          <div :class="'color-palette style-three wow fadeInUp text-left' +' '+list.hoverClass">
            <VTwoCardStyle3 :title="list.title" :icon="list.icon" :mainclass="list.class" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Features',
  data () {
    return {
      titleSectionProp: {
        class: 'text-center',
        title: 'What can we help you?',
        description: 'If you are planning on developing a product landing'
      },

      List: [
        { title: 'Financial Services', class: 'circle-style', icon: 'flaticon flaticon-accounting', hoverClass: 'purple-hover' },
        { title: 'For Government', class: 'circle-style', icon: 'flaticon flaticon-government', hoverClass: 'green-hover' },
        { title: 'For Healthcare', class: 'circle-style', icon: 'flaticon flaticon-care', hoverClass: 'org-hover' },
        { title: 'Ecommerce Support', class: 'circle-style', icon: 'flaticon flaticon-deliver', hoverClass: 'purple-hover' }
      ]
    }
  }
}
</script>
