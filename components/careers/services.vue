<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <VTwoSectionTitle :title-section-prop="titleSectionProp" />
        </div>
      </div>
      <div class="row">
        <div v-for="(list,index) in lists" :key="index" class="col-lg-3 col-md-6">
          <div :class="'sox-services service-pattern wow fadeInUp text-left'+' '+ list.hover" data-wow-delay="0.4s">
            <div class="sox-icon">
              <h5 class="text-hover">
                {{ list.title }}
              </h5>
              <i :class="list.icons" aria-hidden="true" />
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
        title: 'Our company services for you.',
        description: 'If you are planning on developing a product landing'
      },
      lists: [
        {
          hover: 'purple-hover',
          title: 'Competitive Salary',
          icons: 'flaticon flaticon-investment'
        },
        {
          hover: 'org-hover',
          title: 'Stock Management',
          icons: 'flaticon flaticon-accounting'
        },
        {
          hover: 'green-hover',
          title: 'Receivable & Payables',
          icons: 'flaticon flaticon-government'
        },
        {
          hover: 'purple-hover',
          title: 'Manage Buying & Selling',
          icons: 'flaticon flaticon-care'
        }
      ]
    }
  }
}
</script>
