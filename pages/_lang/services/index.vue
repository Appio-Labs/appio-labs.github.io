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
      <Projects />
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
import Projects from "~/components/Services/Projects";
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
    Projects,
    Footer,
  },
  mounted() {
    setTimeout(function () {
      sofbox.index();
      // sofbox.magnific()
    }, 1000);
  },
  /*data: () => ({
    isLoaded: false,
    user: {},
    posts: [],
  }),*/
  methods: {
    /*fetchPosts() {
      return bucket.getObjects({
        type: "portfolio-contents",
        props: "slug,title,metadata",
      });
    },
    fetchUser() {
      return bucket.getObjects({
        type: "portfolio-contents",
        q: "user-data",
        props: "slug,title,metadata",
      });
    },
    fetchObjectTypes() {
      return bucket.getObjectTypes();
    },*/
    /*findSlug(slug) {
      return this.posts.find((item) => {
        return item.slug === slug;
      });
    },*/
    /*extractFirstObject(objects) {
      if (objects.objects == null)
        return void 0;
      else
        return objects.objects[0];
    }*/
  },
  /*created() {
    document.body.classList.add("loading");
    Promise.all([this.fetchPosts(), this.fetchUser()]).then(([posts, user_data]) => {
      user_data = this.extractFirstObject(user_data);
      this.posts = posts.objects;
      this.user = {
        name: user_data.metadata.name,
        status: user_data.metadata.status,
        email: user_data.metadata.email,
        phone: user_data.metadata.phone,
        city: user_data.metadata.city,
        lang: user_data.metadata.lang,
        photo: user_data.metadata.photo,
      }
      this.isLoaded = true;
      this.$nextTick(() => document.body.classList.remove("loading"));
    });
  },*/
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;500;700&family=Montserrat:wght@400;500;700&display=swap");
</style>