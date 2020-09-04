<template>
  <section class="pt-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <VTwoSectionTitle :title-section-prop="titleSectionProp" />
          <div class="iq-accordion career-style  ">
            <div v-for="(list,index) in lists" :key="index" :class="list.class">
              <div class="active-faq clearfix" style="">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="col-md-9 col-sm-12 ">
                      <a href="#" class="accordion-title"><span>{{ list.title }}</span></a>
                    </div>
                    <div class="col-md-3 col-sm-12 text-center text-lg-right text-md-right">
                      <a class="button-gradient" href="#">Read more</a>
                    </div>
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
  name: 'Position',
  data () {
    return {
      titleSectionProp: {
        title: 'Open Positions',
        description: 'If you are planning on developing a product landing'
      },
      lists: [
        {
          class: 'iq-accordion-block accordion-active',
          title: 'UI/UX designer'
        },
        {
          class: 'iq-accordion-block ',
          title: 'Graphic Designer'
        },
        {
          class: 'iq-accordion-block ',
          title: 'Web Developer'
        }
      ]
    }
  }
}
</script>
