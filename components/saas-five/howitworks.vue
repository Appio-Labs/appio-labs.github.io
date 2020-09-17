<template>
  <section class="pt-0">
    <div class="container">
      <div class="row full-img-left">
        <div class="col-lg-6 mb-5 mb-lg-0 ">
          <img src="../../assets/sofbox-v2/images/home-8/904.png" class="img-fluid" alt="blogimage1">
        </div>
        <div class="col-lg-6">
          <VTwoSectionTitle :title-section-prop="titleSectionProp" />
          <div class="row">
            <div v-for="(list,index) in lists" :key="index" class="col-lg-4">
              <div :class="list.class">
                <div class="sox-icon">
                  <i :class="list.icon" aria-hidden="true" />
                  <h6 class="text-hover">
                    {{ list.title }}
                  </h6>
                </div>
                <div class="service-number">
                  <span>{{ index + 1 }}</span>
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
  name: 'Howitworks',
  data () {
    return {
      titleSectionProp: {
        title: 'How does sofbox work?',
        description: 'If you are planning on developing a product landing',
        class: 'text-left'
      },
      lists: [
        {
          class: 'sox-services purple-hover',
          title: ' Make Account',
          icon: 'flaticon flaticon-growth'
        },
        {
          class: 'sox-services org-hover',
          title: ' Select Recipient',
          icon: 'flaticon flaticon-growth'
        },
        {
          class: 'sox-services purple-hover',
          title: '  Send Money',
          icon: 'flaticon flaticon-growth'
        }
      ]
    }
  }
}
</script>
