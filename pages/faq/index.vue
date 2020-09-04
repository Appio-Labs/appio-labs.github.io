<template>
  <div>
    <breadcrumb title="FAQ" />
    <div class="main-content overflow">
      <faq />
    </div>
  </div>
</template>
<script>
import { sofbox } from '../../assets/app/app'
import faq from '../../components/faq/faq'
export default {
  layout: 'SofboxVTwoLayout2',
  components: {
    faq
  },

  mounted () {
    setTimeout(function () {
      sofbox.index()
    }, 1000)
  }
}
</script>
