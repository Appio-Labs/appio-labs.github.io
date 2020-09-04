<template>
  <section class="pb-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <img src="../../assets/sofbox-v2/images/home-1/18.jpg" class="img-fluid w-100" alt="blogimage1">
          <h3 class="pt-3 pb-3">
            Construction industry
          </h3>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
          <div class="blog-content">
            <blockquote class="blockquote mt-4 mb-4">
              <p class="mb-0">
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.
              </p>
            </blockquote>
          </div>
          <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
          <div class="share-box">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-6">
                <div class="social-icone text-left mt-3 mt-lg-0 mt-md-0">
                  <h5 class="d-inline">
                    Shar:
                  </h5>
                  <ul class="list-inline mb-0 d-inline">
                    <li v-for="(item,index) in items" :key="index" class="list-inline-item">
                      <a href="#"><i :class="item.classname" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <h4 class="mb-2 mt-5">
            Leave a Reply
          </h4>
          <p>Your email address will not be published. Required fields are marked *</p>
          <form>
            <div class="row">
              <div class="col-lg-6">
                <input id="inputName" type="text" class="form-control" placeholder="Your Name">
              </div>
              <div class="col-lg-6">
                <input id="inputEmail" type="Email" class="form-control" placeholder="Your Email">
              </div>
              <div class="col-lg-12">
                <input id="inputSubject" type="text" class="form-control" placeholder="Your Subject">
              </div>
              <div class="col-lg-12">
                <textarea id="exampleFormControlTextarea1" class="form-control" rows="7" placeholder="Your Message" />
              </div>
              <div class="col-lg-12">
                <a class="button" href="">Send Message</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Details',
  data () {
    return {
      items: [
        {
          classname: 'fab fa-facebook-square'
        },
        {
          classname: 'fab fa-twitter'
        },
        {
          classname: 'fab fa-google-plus'
        },
        {
          classname: 'fab fa-linkedin'
        },
        {
          classname: 'fab fa-pinterest'
        }
      ]
    }
  }
}
</script>
