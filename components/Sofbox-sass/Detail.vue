<template>
  <div class="blog-img">
    <img src="../../assets/sofbox-sass-black/images/blog/01.jpg" class="img-fluid mb-3" alt="image">
    <div class="blog-box">
      <ul class="d-inline-block float-left">
        <li class="d-inline">
          <img src="../../assets/sofbox-sass-black/images/blog/clients/01.jpg" class="img-fluid rounded-circle" alt="img"> <span class="pl-2 text-white">Nik Jordern</span>
        </li>
        <li class="d-inline ml-3">
          <a href="javascript:void(0)" class=""><i class="far fa-calendar-alt" /> 01 January 2019</a>
        </li>
      </ul>
      <ul class="d-inline-block float-right">
        <li class="d-inline-block mr-3">
          <a href="javascript:void(0)"><i class="far fa-thumbs-up" /> <span class="iq-fw-6">90</span></a>
        </li>
        <li class="d-inline-block">
          <a href="javascript:void(0)"><i class="far fa-comment-alt" /> <span class="iq-fw-6">120</span></a>
        </li>
      </ul>
    </div>
    <h3 class="mb-3">
      Design Your Perfect Event.
    </h3>
    <div class="address text-white mb-3">
      <a href="javascript:void(0)"><i class="fas fa-tags mr-3" />    Business, Digital, Ofiice</a>
    </div>
    <p class="mb-5">
      Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,Lorem Ipsum.lorem quis bibendum auctor. Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,Lorem Ipsum.lorem quis bibendum auctor. Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat
    </p>

    <div class="iq-blockquote position-relative ">
      <blockquote class="blockquote green-bg double-quotes">
        <h5 class="mb-0 text-white">
          Nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
        </h5>
      </blockquote>
    </div>
    <div class="iq-post">
      <div class="row">
        <div class="col-lg-4">
          <img src="../../assets/sofbox-sass-black/images/blog/blog-detail/06.jpg" class="img-fluid" alt="img">
        </div>
        <div class="col-lg-4">
          <img src="../../assets/sofbox-sass-black/images/blog/blog-detail/07.jpg" class="img-fluid" alt="img">
        </div>
        <div class="col-lg-4">
          <img src="../../assets/sofbox-sass-black/images/blog/blog-detail/08.jpg" class="img-fluid" alt="img">
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <p class="mt-3 mb-3">
            Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,Lorem Ipsum.lorem quis bibendum auctor.
          </p>
        </div>
      </div>
    </div>

    <div class="clearfix" />

    <h2 class="mb-5 mt-5">
      4 Comments
    </h2>
    <ul class="d-block mb-5">
      <li v-for="(comment,index) in comments" :key="index" class="list-inline-item">
        <BlackCardStyle6 :class-name="comment.parent ? 'mt-5 ml-5' : 'mt-5 mr-5' ">
          <template v-slot:CardMedia>
            <img class="mr-3 " :src="comment.image" alt="Generic placeholder image">
          </template>
          <template v-slot:cardHeader>
            <h5 class="mt-0 float-left">
              {{ comment.name }}
            </h5>
            <a class="month-detail float-right" href="javascript:void(0)"><i class="far fa-calendar-alt" /> {{ comment.date }}</a>
          </template>
          <template v-slot:cardBody>
            <P>{{ comment.description }}</P>
            <a class="reply-btn text-green iq-font-18" href="javascript:void(0)">Reply</a>
          </template>
        </BlackCardStyle6>
      </li>
    </ul>
    <div class="blog-comment-form ">
      <h3 class="wow fadeInUp mb-5" data-wow-duration="1.0s">
        Post A Comment
      </h3>
      <form class="iq-commentbox">
        <div class="comment-form comment-box">
          <div class="row">
            <div class="col-lg-6 col-sm-12">
              <input id="firstname" type="text" placeholder="First Name" name="firstname">
            </div>
            <div class="col-lg-6 col-sm-12">
              <input id="lastname" type="text" placeholder="Last Name" name="lastname">
            </div>
            <div class="col-lg-6 col-sm-12">
              <input type="email" placeholder="Email" name="email">
            </div>
            <div class="col-lg-6 col-sm-12">
              <input type="text" placeholder="Phone" name="phobe">
            </div>
            <div class="col-lg-12 col-sm-12">
              <textarea class="input-message" placeholder="Your comments" rows="7" name="message" />
            </div>
            <div class="col-lg-12 col-sm-12">
              <a href="" class="button">Send a Comment</a>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Detail',
  data () {
    return {
      comments: [
        {
          name: 'John Deo',
          image: './assets/sofbox-sass-black/images/blog/clients/02.jpg',
          date: '01 January 2019',
          description: 'Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.',
          parent: 0
        },
        {
          name: 'Kips Leo',
          image: './assets/sofbox-sass-black/images/blog/clients/03.jpg',
          date: '01 January 2019',
          description: 'Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.',
          parent: 1
        },
        {
          name: 'Glen Jax',
          image: './assets/sofbox-sass-black/images/blog/clients/01.jpg',
          date: '01 January 2019',
          description: 'Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.',
          parent: 0
        }
      ]
    }
  }
}
</script>
