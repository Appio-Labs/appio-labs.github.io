<template>
  <div>
    <BlackBannerStyle1 title="Blog right sidebar">
      <template v-slot:bannerLinks>
        <ol class="breadcrumb title">
          <li class="breadcrumb-item">
            <a href="index.html" class="">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Blogs
          </li>
        </ol>
      </template>
    </BlackBannerStyle1>
    <div class="main-content">
      <section class="iq-blogs">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <BlogListing sm="12" md="12" lg="12" :bloglists="blogList" />
            </div>
            <div class="col-lg-4 ">
              <BlackSidebar />
            </div>
          </div>
          <BlackPagination
            :next-url="pagination.next_link"
            :previous-url="pagination.previous_link"
            :first-url="pagination.first_link"
            :last-url="pagination.last_link"
            :pagination="pagination.pages"
            :current="pagination.current_page"
          />
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import { sofbox } from '../../assets/app/app'
import BlogListing from '../../components/Sofbox-sass/BlogListing'
import Footer from '../..//components/Sofbox-sass/Footer'
export default {
  name: 'Index',
  layout: 'SofboxSass',
  components: {
    BlogListing,
    Footer
  },
  data () {
    return {
      blogList: [
        {
          media: require('../../assets/sofbox-sass-black/images/blog/03.jpg'),
          title: 'Fully Dedicated Finding',
          // tslint:disable-next-line:max-line-length
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          createddate: 'April 05, 2019',
          likes: '60',
          comments: '20'
        },
        {
          media: require('../../assets/sofbox-sass-black/images/blog/03.jpg'),
          title: 'Fully Dedicated Finding',
          // tslint:disable-next-line:max-line-length
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          createddate: 'April 05, 2019',
          likes: '60',
          comments: '20'
        },
        {
          media: require('../../assets/sofbox-sass-black/images/blog/03.jpg'),
          title: 'Fully Dedicated Finding',
          // tslint:disable-next-line:max-line-length
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          createddate: 'April 05, 2019',
          likes: '60',
          comments: '20'
        },
        {
          media: require('../../assets/sofbox-sass-black/images/blog/03.jpg'),
          title: 'Fully Dedicated Finding',
          // tslint:disable-next-line:max-line-length
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          createddate: 'April 05, 2019',
          likes: '60',
          comments: '20'
        },
        {
          media: require('../../assets/sofbox-sass-black/images/blog/03.jpg'),
          title: 'Fully Dedicated Finding',
          // tslint:disable-next-line:max-line-length
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          createddate: 'April 05, 2019',
          likes: '60',
          comments: '20'
        },
        {
          media: require('../../assets/sofbox-sass-black/images/blog/03.jpg'),
          title: 'Fully Dedicated Finding',
          // tslint:disable-next-line:max-line-length
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          createddate: 'April 05, 2019',
          likes: '60',
          comments: '20'
        },
        {
          media: require('../../assets/sofbox-sass-black/images/blog/03.jpg'),
          title: 'Fully Dedicated Finding',
          // tslint:disable-next-line:max-line-length
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          createddate: 'April 05, 2019',
          likes: '60',
          comments: '20'
        },
        {
          media: require('../../assets/sofbox-sass-black/images/blog/03.jpg'),
          title: 'Fully Dedicated Finding',
          // tslint:disable-next-line:max-line-length
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          createddate: 'April 05, 2019',
          likes: '60',
          comments: '20'
        }
      ],
      pagination: {
        first_link: '#',
        last_link: '#',
        previous_link: '#',
        next_link: '#',
        current_page: 2,
        pages: [
          {
            page: 1,
            page_link: '#'
          },
          {
            page: 2,
            page_link: '#'
          },
          {
            page: 3,
            page_link: '#'
          },
          {
            page: 4,
            page_link: '#'
          }
        ]
      }
    }
  },
  mounted () {
    sofbox.index()
  }
}
</script>
