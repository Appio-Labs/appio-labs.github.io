<template>
  <section id="iq-about" class="pt-0 pb-0">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <img class="img-fluid" src="../../assets/sofbox-v2/images/home-5/508.jpeg" alt="img">
        </div>
        <div class="col-lg-6">
          <VTwoSectionTitle :title-section-prop="titleSectionProp" />
          <a class="button blue-btn button-icon mt-5" href="#"><span class="btn-effect">Read More</span></a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'About',
  data () {
    return {
      titleSectionProp: {
        class: 'text-left mb-0',
        title: 'Get Tips & Tricks on How to Skyrocket Your Sales.',
        description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny!It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.'
      }
    }
  }
}
</script>
