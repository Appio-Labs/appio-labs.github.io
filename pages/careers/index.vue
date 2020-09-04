<template>
  <div>
    <breadcrumb title="Careers" />
    <div class="main-content overflow">
      <services />
      <position />
    </div>
  </div>
</template>
<script>
import { sofbox } from '../../assets/app/app'
import services from '../../components/careers/services'
import position from '../../components/careers/position'
export default {
  layout: 'SofboxVTwoLayout2',
  components: {
    services,
    position
  },

  mounted () {
    setTimeout(function () {
      sofbox.index()
    }, 1000)
  }
}
</script>
