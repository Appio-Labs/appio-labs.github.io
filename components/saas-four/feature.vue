<template>
  <section id="iq-feature" class="pb-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="conatiner Sofbox-tab verticaltab">
            <div class="row align-items-center flex-row-reverse">
              <div class="col-lg-6 tabContent">
                <div :id="list.id" v-for="(list,index) in tabList" :key="index" :class=" list.active !== undefined && list.active ? 'tab-pane fade active show' : 'tab-pane fade'">
                  <div class="text-left">
                    <img :src="list.tabImage" class="img-fluid" alt="img">
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <VTwoSectionTitle :title-section-prop="titleSectionProp" />
                <div id="v-pills-tab" class="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                  <a
                    v-for="(list,index) in tabList"
                    :key="index"
                    :class="list.active !== undefined && list.active ? 'nav-link active show' : 'nav-link '"
                    :href="'#' + list.id"
                    :aria-selected=" list.active !== undefined ? true : false "
                    @click="'tabActive'+' '+list.id"
                    data-toggle="pill"
                    role="tab"
                  >
                    <div class="saas-works-box">
                      <div class="media">
                        <img :src="list.image" class="align-self-center mr-3" alt="tab-image">
                        <div class="media-body">
                          <h5 class="mb-2 active-title">{{ list.title }}</h5>
                          <p class="mb-0">{{ list.description }}</p>
                        </div>
                      </div>
                    </div>
                  </a>
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
export default {
  name: 'Feature',
  data () {
    return {
      titleSectionProp: {
        class: 'text-left wow fadeInUp',
        title: 'Get Tips & Tricks on How to Skyrocket Your Sales.',
        description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny!It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.',
        descClass: 'title-design'
      },

      tabList: [
        {
          title: 'Reporting Analysis',
          id: 'tab-reporting-analysis',
          tabImage: require('../../assets/sofbox-v2/images/home-5/509.jpeg'),
          image: require('../../assets/sofbox-v2/images/home-5/510.png'),
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          active: 'true'
        },
        {
          title: 'Technical SEO Audit',
          id: 'tab-technical-seo-audit',
          tabImage: require('../../assets/sofbox-v2/images/home-5/508.jpeg'),
          image: require('../../assets/sofbox-v2/images/home-5/511.png'),
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          active: ''
        }
      ]
    }
  }
}
</script>
