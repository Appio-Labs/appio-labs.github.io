<template>
  <section>
    <div class="container">
      <div class="row">
        <blogsection :blogs="blogs" classname="col-lg-8 col-sm-12">
        </blogsection>
        <VTwoSideBar :posts="posts" :items="items" />
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
      ],
      posts: [
        {
          src: require('../../assets/sofbox-v2/images/home-1/16.jpg'),
          title: 'Construction industry',
          date: 'November 28, 2019'
        },
        {
          src: require('../../assets/sofbox-v2/images/home-1/16.jpg'),
          title: 'Life Lack Meaning',
          date: 'November 28, 2019'
        },

        {
          src: require('../../assets/sofbox-v2/images/home-1/16.jpg'),
          title: 'Construction industry',
          date: 'November 28, 2019'
        },
        {
          src: require('../../assets/sofbox-v2/images/home-1/16.jpg'),
          title: 'Life Lack Meaning',
          date: 'November 28, 2019'
        },
        {
          src: require('../../assets/sofbox-v2/images/home-1/16.jpg'),
          title: 'All types of service.',
          date: 'November 28, 2019'
        }
      ],
      items: [
        {
          title: 'Creative',
          num: '3'
        },
        {
          title: 'Design',
          num: '2'
        },
        {
          title: 'HTML',
          num: '2'
        },
        {
          title: 'Photography',
          num: '3'
        },
        {
          title: 'Uncategorized',
          num: '1'
        }
      ]
    }
  }
}
</script>
