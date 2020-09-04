<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="custom-tab horizontaltab  ">
            <ul id="pills-tab" class="nav nav-pills mb-5" role="tablist">
              <li v-for="(tab,index) in tabs" :key="index" class="nav-item">
                <a
                  :id="tab.id"
                  :class="tab.active ? 'nav-link active1 ' : 'nav-link'"
                  data-toggle="pill"
                  :href="'#' + tab.href"
                  role="tab"
                  :aria-controls="tab.href"
                  aria-selected="true"
                ><h6 class="tab-title">{{ tab.title }}</h6></a>
              </li>
            </ul>
            <div class="show_content" style="min-height: 350px">
              <div id="tab-getting-started" class="tab-pane fade active show">
                <div class="title-box wow fadeInUp mb-3 text-left">
                  <h4 class="mb-4">
                    Getting started
                  </h4>
                </div>
                <div class="iq-accordion career-style faq-style  ">
                  <div class="iq-accordion-block accordion-active">
                    <div class="active-faq clearfix">
                      <div class="container">
                        <div class="row">
                          <div class="col-sm-12">
                            <a class="accordion-title"><span> It is a long established fact that a reader will be? </span> </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-details">
                      <p class="mb-0">
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                      </p>
                    </div>
                  </div>
                  <div class="iq-accordion-block ">
                    <div class="active-faq clearfix">
                      <div class="container">
                        <div class="row">
                          <div class="col-sm-12">
                            <a class="accordion-title"><span> Distracted by the readable content of a page whent? </span> </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-details">
                      <p class="mb-0">
                        It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
                      </p>
                    </div>
                  </div>
                  <div class="iq-accordion-block">
                    <div class="active-faq clearfix">
                      <div class="container">
                        <div class="row">
                          <div class="col-sm-12">
                            <a class="accordion-title"><span> The readable content of a page when looking at its layout? </span> </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-details " style="display: none;">
                      <p class="mb-0">
                        It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-pricing-plan" class="tab-pane fade">
                <h4 class="mb-4">
                  Pricing Plan
                </h4>
                <div class="iq-accordion career-style faq-style  ">
                  <div class="iq-accordion-block accordion-active">
                    <div class="active-faq clearfix">
                      <div class="container">
                        <div class="row">
                          <div class="col-sm-12">
                            <a class="accordion-title"><span> It is a long established fact that a reader will be? </span> </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-details">
                      <p class="mb-0">
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                      </p>
                    </div>
                  </div>
                  <div class="iq-accordion-block ">
                    <div class="active-faq clearfix">
                      <div class="container">
                        <div class="row">
                          <div class="col-sm-12">
                            <a class="accordion-title"><span> Distracted by the readable content of a page whent? </span> </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-details">
                      <p class="mb-0">
                        It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
                      </p>
                    </div>
                  </div>
                  <div class="iq-accordion-block ">
                    <div class="active-faq clearfix">
                      <div class="container">
                        <div class="row">
                          <div class="col-sm-12">
                            <a class="accordion-title"><span> The readable content of a page when looking at its layout? </span> </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-details">
                      <p class="mb-0">
                        It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-sales-quotation" class="tab-pane fade">
                <h4 style="text-align: left" class="vc_custom_heading mb-4">
                  Sales quotation
                </h4>
                <div class="iq-accordion career-style faq-style  ">
                  <div class="iq-accordion-block accordion-active">
                    <div class="active-faq clearfix">
                      <div class="container">
                        <div class="row">
                          <div class="col-sm-12">
                            <a class="accordion-title"><span> It is a long established fact that a reader will be? </span> </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-details">
                      <p class="mb-0">
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                      </p>
                    </div>
                  </div>
                  <div class="iq-accordion-block ">
                    <div class="active-faq clearfix">
                      <div class="container">
                        <div class="row">
                          <div class="col-sm-12">
                            <a class="accordion-title"><span> Distracted by the readable content of a page whent? </span> </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-details">
                      <p class="mb-0">
                        It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
                      </p>
                    </div>
                  </div>
                  <div class="iq-accordion-block ">
                    <div class="active-faq clearfix">
                      <div class="container">
                        <div class="row">
                          <div class="col-sm-12">
                            <a class="accordion-title"><span> The readable content of a page when looking at its layout? </span> </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-details">
                      <p class="mb-0">
                        It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { sofbox } from '../../assets/app/app'
export default {
  name: 'Faq',
  data () {
    return {
      tabs: [
        {
          id: 'pills-started-tab',
          href: 'tab-getting-started',
          title: 'Getting started',
          active: true
        },
        {
          id: 'pills-price-tab1',
          href: 'tab-pricing-plan',
          title: 'Pricing Plan',
          active: false
        },
        {
          id: 'pills-sales-tab1',
          href: 'tab-sales-quotation',
          title: 'Sales quotation',
          active: false
        }
      ]
    }
  },
  mounted () {
    setTimeout(() => {
      sofbox.activeTabPane()
    }, 1000)
  }
}
</script>
