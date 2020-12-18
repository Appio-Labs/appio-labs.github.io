<template>
  <div data-spy="scroll" data-offset="80">
    <!--<Loader />-->
    <PostHeaderStyle
      :logo-img="logo"
      :nav-item-list="navItems"
      :styled-logo="styleLogo"
    >
      <a
        slot="navContent"
        href="#contact-us"
        class="button bt-black pull-right"
        >{{ $t("header.contact") }}</a
      >
    </PostHeaderStyle>
    <nuxt />
  </div>
</template>
<script>
import logoImg from "~/assets/images/logo-inline.png";
import { menu } from "~/config/constant";
import { languages } from "~/config/constant";
export default {
  name: "BlogPage",
  data() {
    return {
      styleLogo: false,
      logo: logoImg,
      navItems: [
        {
          href: "/",
          title: "header.home",
          active: true,
          children: false,
          child: menu,
        },
        { href: "/about", title: "header.about" },
        { href: "/services", title: "header.services" },
        /* { href: '#great-screenshots', title: 'Screenshots' }, */
        /* { href: '#pricing', title: 'Pricing' }, */
        /* { href: '#team', title: 'Team' },
        { href: '#blog', title: 'Blog' }, */
        /*{ href: '#contact-us', title: 'header.contact' },*/
        {
          title: "header.language",
          active: false,
          children: true,
          child: languages,
        },
      ],
    };
  },
  mounted() {},
  head() {
    return {
      bodyAttrs: {
        "data-spy": "scroll",
        "data-offset": "80",
      },
    };
  },
};
</script>
<style>
@import url("~/assets/css/color/style.css");
</style>
