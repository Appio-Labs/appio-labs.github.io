<template>
  <div>
    <breadcrumb title="About Us" />
    <div class="main-content overflow">
      <service />
      <about />
      <sales />
      <team />
    </div>
  </div>
</template>
<script>
import { sofbox } from '../../assets/app/app'
import service from '../../components/about-us/service'
import about from '../../components/about-us/about'
import sales from '../../components/about-us/sales'
import team from '../../components/about-us/team'
export default {
  layout: 'SofboxVTwoLayout2',
  components: {
    service,
    about,
    sales,
    team
  },

  mounted () {
    setTimeout(function () {
      sofbox.index()
    }, 1000)
  }
}
</script>
