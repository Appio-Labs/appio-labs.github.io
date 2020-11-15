<template>
  <div>
    <Home />
    <div class="main-content">
      <About />
      <Client />
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
import Home from "~/components/LandingPage1/Home";
import About from "~/components/LandingPage1/About";
import Specialities from "~/components/LandingPage1/Specialities";
import Counter from "~/components/LandingPage1/Counter";
import Testimonial from "~/components/LandingPage1/Testimonial";
import Pricing from "~/components/LandingPage1/Pricing";
import Team from "~/components/LandingPage1/Team";
import CompareService from "~/components/LandingPage1/CompareService";
import Faq from "~/components/LandingPage1/Faq";
import Blog from "~/components/LandingPage1/Blog";
import Client from "~/components/LandingPage1/Client";
import Contact from "~/components/LandingPage1/Contact";
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
