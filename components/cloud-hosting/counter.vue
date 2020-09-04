<template>
  <section class="pt-0 text-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <VTwoSectionTitle :title-section-prop="titleSectionProp" />
        </div>
        <div v-for="(list,index) in List" :key="index" class="col-lg-4">
          <div :style="list.colour" class="iq-timer counter-horizontal">
            <div class="timer-details">
              <span :CountTo="list.value" :from="0" :duration="5" class="timer" style="color: #000000;">{{ list.value }}</span>
              <span class="total-cust" style="color: #000000;">{{ list.cost }}</span>
              <i class="ion-android-add" aria-hidden="true" style="color: #000000;" />
              <div class="border-effect">
                <div class="title-saas" />
              </div>
              <p style="color: #000000;">
                {{ list.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Counter',
  data () {
    return {
      titleSectionProp: {
        class: 'text-center',
        title: 'Join our global community',
        description: 'If you are planning on developing a product landing'
      },

      List: [
        { title: 'Customers', value: '4', cost: 'M', colour: 'background: #e0f7f2;' },
        { title: 'Customers', value: '150', cost: 'M', colour: 'background: #ffe9e7;' },
        { title: 'Customers', value: '4', cost: 'B', colour: 'background: #dce1f6;' }
      ]
    }
  }
}
</script>
