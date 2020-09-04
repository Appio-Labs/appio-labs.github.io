<template>
  <div>
    <breadcrumb title="Blog Detail" />
    <div class="main-content overflow">
      <detail />
      <post />
    </div>
  </div>
</template>
<script>
import { sofbox } from '../../assets/app/app'
import detail from '../../components/blogdetail/details'
import post from '../../components/blogdetail/post'
export default {
  layout: 'SofboxVTwoLayout2',
  components: {
    detail,
    post
  },

  mounted () {
    setTimeout(function () {
      sofbox.index()
    }, 1000)
  }
}
</script>
