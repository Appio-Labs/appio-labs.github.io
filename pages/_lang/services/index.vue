<template>
  <div>
    <Home />
    <div class="main-content">
      <!--<About />-->
      <!--<Client />-->
      <Specialities />
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
import Home from "~/components/Services/Home";
import About from "~/components/Services/About";
import Specialities from "~/components/Services/Specialities";
import Counter from "~/components/Services/Counter";
import Testimonial from "~/components/Services/Testimonial";
import Pricing from "~/components/Services/Pricing";
import Team from "~/components/Services/Team";
import CompareService from "~/components/Services/CompareService";
import Faq from "~/components/Services/Faq";
import Blog from "~/components/Services/Blog";
import Client from "~/components/Services/Client";
import Contact from "~/components/Services/Contact";
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
