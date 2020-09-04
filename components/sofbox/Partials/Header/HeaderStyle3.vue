<template>
  <!--=================================
      Header -->
  <header id="header" :class="className">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="index.html">
              <img :id="styledLogo ? 'logo_img' : ''" :src="logoImg" class="img-fluid" alt="logo">
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>
            <div id="navbarNavDropdown" class="collapse navbar-collapse">
              <ul class="navbar-nav ml-auto">
                <template v-for="(option, index) in navItemList">
                  <li v-if="option.children" :key="index" class="nav-item dropdown">
                    <a
                      id="navbarDropdown"
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {{ option.title }}
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <nuxt-link v-for="(child, index1) in option.child" :key="`link-${index1}`" :to="child.href" class="dropdown-item">
                        {{ child.title }}
                      </nuxt-link>
                    </div>
                  </li>
                  <li v-else :key="index" class="nav-item menu-item">
                    <a v-if="!option.redirect" :class="`nav-link ${option._is_active !== undefined && option._is_active ? 'active' : '' }`" :href="option.href" @click="jumpTo(option.href)">
                      {{ option.title }}
                    </a>
                    <nuxt-link v-else :to="option.href" class="nav-link">
                      {{ option.title }}
                    </nuxt-link>
                  </li>
                </template>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!--=================================
    Header -->
</template>

<script>
const $ = require('jquery')
export default {
  name: 'HeaderStyle3',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    className: String,
    // eslint-disable-next-line vue/require-default-prop
    logoImg: String,
    // eslint-disable-next-line no-undef,vue/require-default-prop
    navItemList: Array,
    // eslint-disable-next-line vue/require-default-prop,vue/require-prop-types
    styledLogo: { Boolean: true }
  },
  created () {
    this.$root.$on('bv::scrollspy::activate', this.onActivate)
  },
  methods: {
    onActivate (target) {
    },
    jumpTo (href) {
      $('html, body').stop().animate({
        scrollTop: $(href).offset().top
      }, 1500)
    }
  }
}
</script>

<style scoped>

</style>
