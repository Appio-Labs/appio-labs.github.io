<template>
  <div>
    <breadcrumb title="Services" />
    <div class="main-content overflow">
      <feature />
      <about />
      <sales />
    </div>
  </div>
</template>
<script>
import { sofbox } from '../../assets/app/app'
import feature from '../../components/services/feature'
import about from '../../components/services/about'
import sales from '../../components/services/sales'
export default {
  layout: 'SofboxVTwoLayout2',
  components: {
    feature,
    about,
    sales
  },

  mounted () {
    setTimeout(function () {
      sofbox.index()
    }, 1000)
  }
}
</script>
