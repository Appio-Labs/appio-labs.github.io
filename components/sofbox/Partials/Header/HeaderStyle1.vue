<template>
  <!-- Header -->
  <header id="main-header" :class="className">
    <slot name="topBar" />
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#">
              <img :id="styledLogo ? 'logo_img' : ''" class="img-fluid" :src="logoImg" alt="#">
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="ion-navicon" />
            </button>
            <div id="navbarSupportedContent" class="collapse navbar-collapse">
              <ul class="navbar-nav mr-auto w-100 justify-content-end menu">
                <li v-for="(option,index) in navItemList" :key="index" class="nav-item menu-item">
                  <a class="nav-link" v-if="$i18n.locale === 'en' && option.title == 'header.language'" :class="option.active !== undefined && option.active ? ' active ' : ''">
                    <img alt="english" class="img-fluid" width="15" height="15" :src="require('../../../../assets/images/flags/flag-en.png')">
                    {{ $t(option.title) }}
                    <i v-if="option.children" class="fa fa-angle-down toggledrop" aria-hidden="true" />
                  </a>
                  <a class="nav-link" v-else-if="$i18n.locale === 'es' && option.title == 'header.language'" :class="option.active !== undefined && option.active ? ' active ' : ''">
                    <img alt="español" class="img-fluid" width="15" height="15" :src="require('../../../../assets/images/flags/flag-es.png')">
                    {{ $t(option.title) }}
                    <i v-if="option.children" class="fa fa-angle-down toggledrop" aria-hidden="true" />
                  </a>
                  <a class="nav-link" v-else :class="option.active !== undefined && option.active ? ' active ' : ''" :href="option.href" @click="jumpTo(option.href)">
                    {{ $t(option.title) }}
                    <i v-if="option.children" class="fa fa-angle-down toggledrop" aria-hidden="true" />
                  </a>
                  <ul v-if="option.children" class="sub-menu" style="display: none;">
                    <li
                      v-for="(child,index) in option.child"
                      id="menu-item-506"
                      :key="index"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-506"
                    >
                      <nuxt-link v-if="child.title == 'language.english'" :to="$route.fullPath.replace(/^\/[^\/]+/, '')" class="nav-item menu-item" active-class="none" exact>
                        <img alt="english" class="img-fluid" width="15" height="15" :src="require('../../../../assets/images/flags/flag-en.png')">
                        <span>{{ $t(child.title) }}</span>
                      </nuxt-link>
                      <nuxt-link v-else-if="child.title == 'language.spanish'" :to="child.href + $route.fullPath.replace(/^\/[^\/]+/, '')" class="nav-item menu-item" active-class="none" exact>
                        <img alt="spanish" class="img-fluid" width="15" height="15" :src="require('../../../../assets/images/flags/flag-es.png')">
                         <span>{{ $t(child.title) }}</span>
                      </nuxt-link>
                      <nuxt-link v-else :to="child.href" class="nav-item menu-item" active-class="none" exact>
                         <span>{{ $t(child.title) }}</span>
                      </nuxt-link>
                    </li>
                  </ul>
                  <!--<li id="menu-item-506" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-506">
                <nuxt-link v-if="$i18n.locale === 'en'" :to="`/es` + $route.fullPath" class="nav-item menu-item">
                  <span>{{ $t('links.french') }}</span>
                </nuxt-link>
                <nuxt-link v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" class="nav-item menu-item" active-class="none" exact>
                  <span>{{ $t('links.english') }}</span>
                </nuxt-link>
                </li>-->
                </li>
              </ul>
              <slot name="navContent" />
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- Header End -->
</template>

<script>
const $ = require('jquery')
export default {
  name: 'HeaderStyle1',
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
      console.log('Received event: "bv::scrollspy::activate" for target ', target)
    },
    jumpTo (href) {
      $('html, body').stop().animate({
        scrollTop: $(href).offset().top
      }, 1500)
    }
  }
}
</script>
