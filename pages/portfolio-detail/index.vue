<template>
  <div>
    <breadcrumb title="Portfolio Details" />
    <div class="main-content overflow">
      <slider />
      <counter />
      <!-- <detail /> -->
      <portfolio />
    </div>
  </div>
</template>
<script>
import { sofbox } from '../../assets/app/app'
import slider from '../../components/portfoliodetail/slider'
import counter from '../../components/portfoliodetail/counter'
// import detail from '../../components/portfoliodetail/detail'
import portfolio from '../../components/portfoliodetail/portfolio'
export default {
  layout: 'SofboxVTwoLayout2',
  components: {
    slider,
    counter,
    // detail,
    portfolio
  },

  mounted () {
    setTimeout(function () {
      sofbox.index()
    }, 1000)
  }
}
</script>
