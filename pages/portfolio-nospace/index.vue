<template>
  <div>
    <breadcrumb title="Portfolio No space" />
    <div class="main-content overflow">
      <portfolio />
    </div>
  </div>
</template>
<script>
import { sofbox } from '../../assets/app/app'
import portfolio from '../../components/portfolio-nospace/portfolio'
export default {
  layout: 'SofboxVTwoLayout2',
  components: {
    portfolio
  },

  mounted () {
    setTimeout(function () {
      sofbox.index()
    }, 1000)
  }
}
</script>
