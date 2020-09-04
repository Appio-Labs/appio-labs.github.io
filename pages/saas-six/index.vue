<template>
  <div>
    <Home id="iq-home" />
    <div class="main-content">
      <service />
      <servicetabs />
      <about />
      <portfolio />
      <pricing />
      <post />
    </div>
  </div>
</template>
<script>
import { sofbox } from '../../assets/app/app'
import Home from '../../components/saas-six/home'
import service from '../../components/saas-six/service'
import about from '../../components/saas-six/about'
import servicetabs from '../../components/saas-six/servicetabs'
import portfolio from '../../components/saas-six/portfolio'
import pricing from '../../components/saas-six/pricing'
import post from '../../components/saas-six/post'
export default {
  layout: 'SaasSix',
  components: {
    Home,
    service,
    servicetabs,
    about,
    portfolio,
    pricing,
    post
  },
  data () {
    return {
    }
  },

  mounted () {
    setTimeout(function () {
      sofbox.index()
      sofbox.initRevSliderSix()
    }, 1000)
  }
}
</script>
