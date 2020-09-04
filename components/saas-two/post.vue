<template>
  <section class="pb-70 pt-0 iq-rpt-zero">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <VTwoSectionTitle :title-section-prop="titleSectionProp" />
        </div>
        <div class="col-lg-12">
          <VTwoPost :postList="postList" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Post',
  data () {
    return {
      titleSectionProp: {
        title: 'Latest Posts',
        description: 'If you are planning on developing a product landing.'
      },

      postList: [
        { title: 'Life Lack Meaning', description: 'It is a long established fact that a reader will be distracted by the readable.', datetime: 'November 28, 2019', image: require('../../assets/sofbox-v2/images/home-1/16.jpg') },
        { title: 'Life Lack Meaning', description: 'It is a long established fact that a reader will be distracted by the readable.', datetime: 'November 28, 2019', image: require('../../assets/sofbox-v2/images/home-1/17.jpg') },
        { title: 'Life Lack Meaning', description: 'It is a long established fact that a reader will be distracted by the readable.', datetime: 'November 28, 2019', image: require('../../assets/sofbox-v2/images/home-1/18.jpg') },
        { title: 'Life Lack Meaning', description: 'It is a long established fact that a reader will be distracted by the readable.', datetime: 'November 28, 2019', image: require('../../assets/sofbox-v2/images/home-1/19.jpg') },
        { title: 'Life Lack Meaning', description: 'It is a long established fact that a reader will be distracted by the readable.', datetime: 'November 28, 2019', image: require('../../assets/sofbox-v2/images/home-1/20.jpg') }
      ]
    }
  }
}
</script>
