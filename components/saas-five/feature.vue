<template>
  <section id="iq-feature" class="pb-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <VTwoSectionTitle :title-section-prop="titleSectionProp" />
        </div>
      </div>
      <div class="row position-relative">
        <div class="layer_wrap iq-objects  style-two right-top">
          <span class="iq-objects-02">
            <img src="../../assets/sofbox-v2/images/home-1/14.png" alt="drive02">
          </span>
        </div>
        <div class="row">
          <div v-for="(list,index) in List" :key="index" class="col-lg-3">
            <div :class="'sox-services service-pattern wow fadeInUp text-left'+' '+ list.hoverClass" data-wow-delay="0.4s">
              <div class="sox-icon">
                <h5 class="text-hover">
                  {{ list.title }}
                </h5>
                <i :class="list.icon" aria-hidden="true" />
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
  name: 'Feature',
  data () {
    return {
      titleSectionProp: {
        title: 'Popular features',
        description: 'Faff about only a quid blower I don’t want no agro bleeding chimneypot burke tosser cras nice one boot fanny.'
      },

      List: [
        { title: 'Customized Invoices', hoverClass: 'blue-hover', icon: 'flaticon flaticon-growth', desc: 'There are many variations of passages of Lorem Ipsum available.' },
        { title: 'Stock Management', hoverClass: 'org-hover', icon: 'flaticon flaticon-paper-plane', desc: 'There are many variations of passages of Lorem Ipsum available.' },
        { title: 'Receivable & Payables', hoverClass: 'green-hover', icon: 'flaticon flaticon-professional', desc: 'There are many variations of passages of Lorem Ipsum available.' },
        { title: 'Manage Buying', hoverClass: 'blue-hover', icon: 'flaticon flaticon-reward', desc: 'There are many variations of passages of Lorem Ipsum available.' },
        { title: 'Powerful & Secure', hoverClass: 'org-hover', icon: 'flaticon flaticon-business', desc: 'There are many variations of passages of Lorem Ipsum available.' },
        { title: 'Fastest Return Filing', hoverClass: 'green-hover', icon: 'flaticon flaticon-professional', desc: 'There are many variations of passages of Lorem Ipsum available.' },
        { title: 'Monthly Detailed', hoverClass: 'blue-hover', icon: 'flaticon flaticon-document-1', desc: 'There are many variations of passages of Lorem Ipsum available.' },
        { title: 'Product Management', hoverClass: 'org-hover', icon: 'flaticon flaticon-thumbs-up', desc: 'There are many variations of passages of Lorem Ipsum available.' }
      ]
    }
  }
}
</script>
