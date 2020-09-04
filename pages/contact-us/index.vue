<template>
  <div>
    <breadcrumb title="Contact US" />
    <div class="main-content overflow">
      <contact />
      <getintouch />
    </div>
  </div>
</template>
<script>
import { sofbox } from '../../assets/app/app'
import contact from '../../components/contact-us/contact'
import getintouch from '../../components/contact-us/getintouch'
export default {
  layout: 'SofboxVTwoLayout2',
  components: {
    contact,
    getintouch
  },

  mounted () {
    setTimeout(function () {
      sofbox.index()
    }, 1000)
  }
}
</script>
