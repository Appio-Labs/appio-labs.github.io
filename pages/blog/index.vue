<template>
  <div>
    <Home />
    <Blog :posts="posts" />
    <Footer />
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
import Blog from "~/components/Blog/Blog";
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
  async asyncData(context) {
    const { $content, app } = context;
    const defaultLocale = app.i18n.locale;
    const posts = await $content(`${defaultLocale}/blog`).fetch();
    return {
      posts: posts.map((post) => ({
        ...post,
        path: post.path.replace(`/${defaultLocale}`, ""),
      })),
    };
  },
};
</script>