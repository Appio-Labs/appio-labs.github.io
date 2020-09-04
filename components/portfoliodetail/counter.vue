<template>
  <section class="pt-0 pb-0">
    <div class="container">
      <div class="row border-bottom pb-4">
        <div class="col-lg-4">
          <ul class="job-details p-0">
            <li><span class="deatils">Client :</span><span class="pl-3">Soffox</span></li>
            <li><span class="deatils">Website :</span><span class="pl-3">sofboxdummy.com</span></li>
          </ul>
        </div>
        <div class="col-lg-4">
          <ul class="job-details p-0">
            <li><span class="deatils">Date :</span><span class="pl-3">01 january 2019</span></li>
            <li><span class="deatils">Category :</span><span class="pl-3">Business</span></li>
          </ul>
        </div>
        <div class="col-lg-4">
          <div class="deatils-social">
            <span class="mr-3">Share:</span>
            <ul class="share-social  list-inline p-0">
              <li v-for="(list,index) in lists" :key="index" class="list-inline-item">
                <a href="#"><i :class="list.classname" /></a>
              </li>
            </ul>
          </div>
          <div class="d-block">
            <div class="deatils-social">
              <span class="d-inline mr-4">Tags :</span>
              <ul class="share-tags list-inline">
                <li v-for="(tag,index) in tags" :key="index" class="list-inline-item share-tag">
                  <a>{{ tag.title }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Counter',
  data () {
    return {
      lists: [
        {
          classname: 'fa fa-facebook-f'
        },
        {
          classname: 'fa fa-twitter'
        },
        {
          classname: 'fa fa-github'
        },
        {
          classname: 'fa fa-instagram'
        }
      ],
      tags: [
        {
          title: 'Agency'
        },
        {
          title: 'Creative'
        },
        {
          title: 'Business'
        },
        {
          title: 'Startup'
        }
      ]
    }
  }
}
</script>
