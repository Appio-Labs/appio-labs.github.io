<template>
  <div>
    <breadcrumb title="Team" />
    <div class="main-content overflow">
      <services />
      <team />
    </div>
  </div>
</template>
<script>
import { sofbox } from '../../assets/app/app'
import services from '../../components/team/services'
import team from '../../components/team/team'
export default {
  layout: 'SofboxVTwoLayout2',
  components: {
    services,
    team
  },

  mounted () {
    setTimeout(function () {
      sofbox.index()
    }, 1000)
  }
}
</script>
