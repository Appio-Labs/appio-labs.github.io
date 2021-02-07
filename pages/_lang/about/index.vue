<template>
  <div>
    <Home />
    <div class="main-content">
      <About />
      <!--<Client />-->
      <!--<Specialities /> -->
      <!--<Counter />-->
      <!--<Testimonial />-->
      <!--<Pricing />-->
      <!--<Team />-->
      <!--<CompareService />-->
      <!--<Faq />-->
      <!--<Blog />-->
      <!--<Client />-->
      <Footer />
    </div>
    <!--<ColorCustomizer />-->
    <ScrollTop />
  </div>
</template>

<script>
import Home from "~/components/About/Home";
import About from "~/components/About/About";
import Specialities from "~/components/About/Specialities";
import Counter from "~/components/About/Counter";
import Testimonial from "~/components/About/Testimonial";
import Pricing from "~/components/About/Pricing";
import Team from "~/components/About/Team";
import CompareService from "~/components/About/CompareService";
import Faq from "~/components/About/Faq";
import Blog from "~/components/About/Blog";
import Client from "~/components/About/Client";
import Contact from "~/components/About/Contact";
import Footer from "~/components/Common/Footer";
import { sofbox } from "~/assets/app/app";

export default {
  layout: "LandingPage1",
  components: {
    Home,
    About,
    Specialities,
    Counter,
    Testimonial,
    Pricing,
    Team,
    CompareService,
    Faq,
    Blog,
    Client,
    Contact,
    Footer,
  },
  mounted() {
    setTimeout(function () {
      sofbox.index();
      // sofbox.magnific()
    }, 1000);
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;500;700&family=Montserrat:wght@400;500;700&display=swap");
</style>