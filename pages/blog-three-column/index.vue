<template>
  <div>
    <breadcrumb title="Three column blog" />
    <div class="main-content overflow">
      <blog />
    </div>
  </div>
</template>
<script>
import { sofbox } from '../../assets/app/app'
import blog from '../../components/threecolumnblog/blog'
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
