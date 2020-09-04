<template>
  <section>
    <div class="container">
      <div class="row">
        <blogsection :blogs="blogs" classname="col-lg-12">
        </blogsection>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Blog',
  data () {
    return {
      blogs: [
        {
          src: require('../../assets/sofbox-v2/images/home-1/16.jpg'),
          date: 'November 28, 2019',
          title: 'Life Lack Meaning',
          desc: 'It is a long established fact that a reader will be distracted by the readable.'
        },
        {
          src: require('../../assets/sofbox-v2/images/home-1/17.jpg'),
          date: 'November 28, 2019',
          title: 'Life Lack Meaning',
          desc: 'It is a long established fact that a reader will be distracted by the readable.'
        },
        {
          src: require('../../assets/sofbox-v2/images/home-1/18.jpg'),
          date: 'November 28, 2019',
          title: 'Life Lack Meaning',
          desc: 'It is a long established fact that a reader will be distracted by the readable.'
        }
      ]
    }
  }
}
</script>
