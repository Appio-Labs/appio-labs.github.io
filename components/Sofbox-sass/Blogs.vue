<template>
  <!-- Blog-->
  <section class="iq-blogs pt-0">
    <div class="container ">
      <div class="row no-gutters">
        <div class="col-sm-12">
          <div class="title-box text-center">
            <h6 class="title text-white">
              Blog
            </h6>
            <h2 class="text-white">
              Our Blog
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div
            class="owl-carousel owl-theme owl-loaded"
            data-dots="false"
            data-nav="false"
            data-items="2"
            data-items-laptop="2"
            data-items-tab="1"
            data-items-mobile="1"
            data-items-mobile-sm="1"
            data-autoplay="true"
            data-margin="30"
          >
            <div v-for="(blog,index) in blogs" :key="index" class="item">
              <BlackCardStyle4 :image="img">
                <template v-slot:cardBody>
                  <a routerLink="/sofbox-saas/blog-detail-left-sidebar"><h2 class="font-weight-bold">{{ blog.title }}</h2></a>
                  <p>{{ blog.desc }}</p>
                </template>
                <template v-slot:cardFooter>
                  <ul class="list-inline">
                    <li class="list-inline-item  font-weight-bold">
                      <a href="" class="text-white">{{ blog.date }}</a>
                    </li>
                    <li class="float-right list-inline-item ml-3">
                      <a href="" class="text-white font-weight-bold"><span class="icon"><i class=" far fa-comment-alt" /></span> {{ blog.value1 }} </a>
                    </li>
                    <li class="float-right list-inline-item ">
                      <a href="" class="text-white font-weight-bold"><span class="icon"><i class="far fa-heart" /></span> {{ blog.value2 }} </a>
                    </li>
                  </ul>
                </template>
              </BlackCardStyle4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Blog End -->
</template>
<script>
import BlogImg from '../../assets/sofbox-sass-black/images/blog/02.jpg'
export default {
  name: 'Blogs',
  data () {
    return {
      img: BlogImg,
      blogs: [
        {
          title: 'Fully Dedicated Finding',
          desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          date: 'April 05, 2019',
          value1: '40',
          value2: '40'
        },
        {
          title: 'Fully Dedicated Finding',
          desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          date: 'April 05, 2019',
          value1: '40',
          value2: '40'
        }
      ]
    }
  }
}
</script>
