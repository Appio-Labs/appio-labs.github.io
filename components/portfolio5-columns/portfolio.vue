<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="iq-masonry-block">
            <div class="isotope-filters isotope-tooltip">
              <button data-filter="" class="active">
                All<span class="post_no">10</span>
              </button>
              <button data-filter=".creative">
                Creative<span class="post_no">6</span>
              </button>
              <button data-filter=".design">
                design<span class="post_no">2</span>
              </button>
              <button data-filter=".print-branding">
                Print — Branding<span class="post_no">5</span>
              </button>
              <button data-filter=".wordpress-ecommerce">
                Wordpress — eCommerce<span class="post_no">5</span>
              </button>
            </div>
            <VTwoCardStyle4 :items="items" classname=" iq-masonry iq-columns-5" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Portfolio',
  data () {
    return {
      items: [
        {
          class: 'iq-masonry-item creative print-branding',
          src: require('../../assets/sofbox-v2/images/home-1/16.jpg'),
          title: 'Dignissimos wisi cillum',
          subtitle: ' Print — Branding'
        },
        {
          class: 'iq-masonry-item creative wordpress-ecommerce',
          src: require('../../assets/sofbox-v2/images/home-1/17.jpg'),
          title: 'Dignissimos wisi cillum',
          subtitle: ' Wordpress — eCommerce'
        },
        {
          class: 'iq-masonry-item print-branding wordpress-ecommerce',
          src: require('../../assets/sofbox-v2/images/home-1/18.jpg'),
          title: 'Dignissimos wisi cillum',
          subtitle: ' Wordpress — eCommerce'
        },
        {
          class: 'iq-masonry-item',
          src: require('../../assets/sofbox-v2/images/home-1/16.jpg'),
          title: 'Dignissimos wisi cillum',
          subtitle: 'Wordpress — eCommerce'
        },
        {
          class: 'iq-masonry-item creative design print-branding wordpress-ecommerce',
          src: require('../../assets/sofbox-v2/images/home-1/17.jpg'),
          title: 'Dignissimos wisi cillum',
          subtitle: ' Wordpress — eCommerce'
        },
        {
          class: 'iq-masonry-item creative print-branding wordpress-ecommerce',
          src: require('../../assets/sofbox-v2/images/home-1/18.jpg'),
          title: 'Dignissimos wisi cillum',
          subtitle: '  Wordpress — eCommerce'
        },
        {
          class: 'iq-masonry-item creative design',
          src: require('../../assets/sofbox-v2/images/home-1/16.jpg'),
          title: 'Dignissimos wisi cillum',
          subtitle: ' Design'
        },
        {
          class: 'iq-masonry-item print-branding',
          src: require('../../assets/sofbox-v2/images/home-1/17.jpg'),
          title: 'Dignissimos wisi cillum',
          subtitle: ' Print — Branding'
        },
        {
          class: 'iq-masonry-item wordpress-ecommerce',
          src: require('../../assets/sofbox-v2/images/home-1/18.jpg'),
          title: 'Dignissimos wisi cillum',
          subtitle: ' Wordpress — eCommerce'
        },
        {
          class: 'iq-masonry-item creative',
          src: require('../../assets/sofbox-v2/images/home-1/16.jpg'),
          title: 'Dignissimos wisi cillum',
          subtitle: ' Creative'
        }
      ]
    }
  }
}
</script>
