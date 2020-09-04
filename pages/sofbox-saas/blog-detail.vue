<template>
  <div>
    <BlackBannerStyle1 title=" Blog Detail">
      <template v-slot:bannerLinks>
        <ol class="breadcrumb title">
          <li class="breadcrumb-item">
            <a href="index.html" class="">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Blogs
          </li>
        </ol>
      </template>
    </BlackBannerStyle1>
    <div class="main-content">
      <section class="iq-blogs">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <Detail />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  </div>
</template>

<script>
import { sofbox } from '../../assets/app/app'
import Footer from '../../components/Sofbox-sass/Footer'
import Detail from '../../components/Sofbox-sass/Detail'
export default {
  name: 'Index',
  layout: 'SofboxSass',
  components: {
    Footer,
    Detail
  },
  mounted () {
    sofbox.index()
  }
}
</script>
