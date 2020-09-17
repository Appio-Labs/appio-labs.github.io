<template>
  <section id="pricing" class="iq-pricing pt-0">
    <div class="container ">
      <div class="row no-gutters">
        <div class="col-sm-12">
          <BlackSectionTitle title="Pricing" subtitle="Our Pricing" />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 text-center">
          <div id="pills-tabContent" class="tab-content ">
            <div id="monthly" class="tab-pane fade show active" role="tabpanel" aria-labelledby="monthly-tab">
              <div class="row">
                <div v-for="(price,index) in prices" :key="index" class="col-lg-4 col-md-6 col-sm-12 ">
                  <BlackPricingCardStyle1>
                    <template v-slot:cardHeader>
                      <h4 class="text-gray mb-5">
                        {{ price.title }}
                      </h4>
                      <h2>{{ price.value }}<span>/ Per Month</span></h2>
                    </template>
                    <template v-slot:cardBody>
                      <ul class="">
                        <li class="">
                          <i class="fas fa-check-circle" />Ut eu lectus consequat.
                        </li>
                        <li class="">
                          <i class="fas fa-check-circle" />Aenean a neque.
                        </li>
                        <li class="">
                          <i :class="price.icon1" />Aenean lacinia porttitor.
                        </li>
                        <li class="">
                          <i :class="price.icon2" />Unknown printer took
                        </li>
                        <li class="">
                          <i :class="price.icon3" />Embarrassing hidden
                        </li>
                      </ul>
                    </template>
                    <template v-slot:cardFooter>
                      <a class="button mt-5" href="#">Choose Plan</a>
                    </template>
                  </BlackPricingCardStyle1>
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
  name: 'Pricing',
  data () {
    return {
      prices: [
        {
          title: ' Personal',
          value: '19$',
          icon1: 'fas fa-times-circle',
          icon2: 'fas fa-times-circle',
          icon3: 'fas fa-times-circle'
        },
        {
          title: 'Business',
          value: '49$',
          icon1: 'fas fa-check-circle',
          icon2: 'fas fa-times-circle',
          icon3: 'fas fa-times-circle'
        },
        {
          title: 'Enterprise',
          value: '99$',
          icon1: 'fas fa-check-circle',
          icon2: 'fas fa-check-circle',
          icon3: 'fas fa-check-circle'
        }
      ]
    }
  }
}
</script>
