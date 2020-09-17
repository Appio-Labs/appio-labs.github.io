<template>
  <div class="row">
    <div v-for="(list,index) in bloglists" :key="index" :class="'col-lg-'+lg+' '+'col-md-'+md+' '+'col-sm-'+sm">
      <div class="effect-chico blog">
        <img :src="list.media" class="img-fluid" alt="img">
        <div class="blog-info">
          <a routerLink="/sofbox-saas/blog-detail-left-sidebar"><h2 class="font-weight-bold">{{ list.title }}</h2></a>
          <p>{{ list.description }}</p>
        </div>
        <div class="blog-comment">
          <ul>
            <li class="list-inline-item  font-weight-bold">
              <a href="" class="text-white">{{ list.createddate }}</a>
            </li>
            <li class="float-right list-inline-item ml-3">
              <a href="" class="text-white font-weight-bold"><span class="icon"><i class=" far fa-comment-alt" /></span> {{ list.comments }} </a>
            </li>
            <li class="float-right list-inline-item ">
              <a href="" class="text-white font-weight-bold"><span class="icon"><i class="far fa-heart" /></span> {{ list.likes }} </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BlogListing',
  props: {
    lg: {
      type: String,
      default: '6'
    },
    md: {
      type: String,
      default: '6'
    },
    sm: {
      type: String,
      default: '6'
    },
    bloglists: {
      type: Array,
      default: () => []
    }
  }
}
</script>
