<template>
  <div>
    <breadcrumb title="Two column blog" />
    <div class="main-content overflow">
      <blog />
    </div>
  </div>
</template>
<script>
import { sofbox } from '../../assets/app/app'
import blog from '../../components/twocolumnblog/blog'
export default {
  layout: 'SofboxVTwoLayout2',
  components: {
    blog
  },

  mounted () {
    setTimeout(function () {
      sofbox.index()
    }, 1000)
  }
}
</script>
