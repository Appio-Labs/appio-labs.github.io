<template>
  <!--Client-->

  <div class="iq-our-clients white-bg iq-ptb-80">
    <div class="container">
      <div class="heading-title left text-left">
        <h3 class="iq-tw-7 title">
          {{ $t("home.projects.title") }}
        </h3>
      </div>
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <div class="owl-carousel" data-autoplay="true" data-loop="true" data-nav="true" data-dots="false" data-items="6"
            data-items-laptop="6" data-items-tab="4" data-items-mobile="3" data-items-mobile-sm="1" data-margin="30">
            <div v-for="(option, index) in images" :key="index" class="item">
              <a :href="option.href"><img class="img-fluid center-block" :src="option.src" :alt="option.alt" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Client end-->
</template>
<script>
export default {
  name: "Client",
  data() {
    return {
      images: [
        {
          src: require("../../assets/images/clients/05.png"),
          alt: "Book",
          href: "https://book.io",
        },
        {
          src: require("../../assets/images/clients/01.png"),
          alt: "Polygon",
          href: "https://polygon.technology",
        },
        {
          src: require("../../assets/images/clients/02.png"),
          alt: "Hermez",
          href: "https://hermez.io",
        },
        {
          src: require("../../assets/images/clients/03.png"),
          alt: "iden3",
          href: "https://iden3.io",
        },
        {
          src: require("../../assets/images/clients/04.png"),
          alt: "Cinesa",
          href: "https://www.cinesa.es",
        },
        {
          src: require("../../assets/images/clients/05.png"),
          alt: "Book",
          href: "https://book.io",
        },
        {
          src: require("../../assets/images/clients/01.png"),
          alt: "Polygon",
          href: "https://polygon.technology",
        },
        {
          src: require("../../assets/images/clients/02.png"),
          alt: "Hermez",
          href: "https://hermez.io",
        },
        {
          src: require("../../assets/images/clients/03.png"),
          alt: "iden3",
          href: "https://iden3.io",
        },
        {
          src: require("../../assets/images/clients/04.png"),
          alt: "Cinesa",
          href: "https://www.cinesa.es",
        },
        {
          src: require("../../assets/images/clients/05.png"),
          alt: "Book",
          href: "https://book.io",
        },
        {
          src: require("../../assets/images/clients/01.png"),
          alt: "Polygon",
          href: "https://polygon.technology",
        },
        {
          src: require("../../assets/images/clients/02.png"),
          alt: "Hermez",
          href: "https://hermez.io",
        },
        {
          src: require("../../assets/images/clients/03.png"),
          alt: "iden3",
          href: "https://iden3.io",
        },
        {
          src: require("../../assets/images/clients/04.png"),
          alt: "Cinesa",
          href: "https://www.cinesa.es",
        },
      ],
    };
  },
};
</script>
