<template>
  <div>
    <breadcrumb title="Pricing Plans" />
    <div class="main-content overflow">
      <pricing />
    </div>
  </div>
</template>
<script>
import { sofbox } from '../../assets/app/app'
import pricing from '../../components/pricing-plan/pricing'
export default {
  layout: 'SofboxVTwoLayout2',
  components: {
    pricing
  },

  mounted () {
    setTimeout(function () {
      sofbox.index()
    }, 1000)
  }
}
</script>
