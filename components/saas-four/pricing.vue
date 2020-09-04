<template>
  <section class="pt-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <VTwoSectionTitle :title-section-prop="titleSectionProp" />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
          <VTwoPricingCardStyle1 class-name="blue-hover">
            <template v-slot:cardHeader>
              <div class="month-price">
                <h2><small>$</small>29<small /></h2>
                <h6>Per Month</h6>
              </div>
            </template>
            <template v-slot:cardTitle>
              <div class="main-title">
                <h2 class="title">
                  Inbox
                </h2>
              </div>
            </template>
            <template v-slot:cardList>
              <ul>
                <li>Live chat and emails</li>
                <li>Basic help center</li>
                <li>Mobile SDK</li>
                <li><s>600+ Integration</s></li>
                <li><s>Email,chat and social</s></li>
                <li><s>Basic help center</s></li>
              </ul>
            </template>
            <template v-slot:cardFooter>
              <a class=" button blue-btn" href="#">Quickstart</a>
            </template>
          </VTwoPricingCardStyle1>
        </div>
        <div class="col-lg-4 col-md-6">
          <VTwoPricingCardStyle1 class-name="blue-hover">
            <template v-slot:cardHeader>
              <div class="month-price">
                <h2><small>$</small>49<small /></h2>
                <h6>Per Month</h6>
              </div>
            </template>
            <template v-slot:cardTitle>
              <div class="main-title">
                <h2 class="title">
                  Growth
                </h2>
              </div>
            </template>
            <template v-slot:cardList>
              <ul>
                <li>Live chat and emails</li>
                <li>Basic help center</li>
                <li>Mobile SDK</li>
                <li>600+ Integration</li>
                <li><s>Email,chat and social</s></li>
                <li><s>Basic help center</s></li>
              </ul>
            </template>
            <template v-slot:cardFooter>
              <a class=" button blue-btn" href="#">Quickstart</a>
            </template>
          </vtwopricingcardstyle1>
        </div>
        <div class="col-lg-4 col-md-6">
          <VTwoPricingCardStyle1 class-name="blue-hover">
            <template v-slot:cardHeader>
              <div class="month-price">
                <h2><small>$</small>99<small /></h2>
                <h6>Per Month</h6>
              </div>
            </template>
            <template v-slot:cardTitle>
              <div class="main-title">
                <h2 class="title">
                  Scale
                </h2>
              </div>
            </template>
            <template v-slot:cardList>
              <ul>
                <li>Live chat and emails</li>
                <li>Basic help center</li>
                <li>Mobile SDK</li>
                <li>600+ Integration</li>
                <li>Email,chat and social</li>
                <li>Basic help center</li>
              </ul>
            </template>
            <template v-slot:cardFooter>
              <a class="button blue-btn" href="#">Quickstart</a>
              <template />
            </template>
          </VTwoPricingCardStyle1>
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
      titleSectionProp: {
        class: 'text-center',
        title: 'Simple and transparent pricing',
        description: 'If you are planning on developing a product landing'
      }
    }
  }
}
</script>
