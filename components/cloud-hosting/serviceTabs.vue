<template>
  <section id="iq-about" class="pb-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <VTwoSectionTitle :title-section-prop="titleSectionProp" />
        </div>
        <div class="row custom-tab verticaltab3 flex-row-reverse">
          <div class="col-lg-6 col-md-12">
            <ul id="pills-tab" class="nav nav-pills nav-pills-style-3 mb-5" role="tablist" aria-orientation="vertical">
              <li v-for="(list,index) in List" :key="index" class="nav-item">
                <a
                  :class="list.active !== undefined && list.active ? 'nav-link active1 show' : 'nav-link'"
                  :href="'#' + list.id"
                  :aria-selected=" list.active !== undefined ? true : false "
                  data-toggle="pill"
                  role="tab"
                >
                  <div class="media">
                    <div class="media-body">
                      <h4 class="mb-2 active-title">{{ list.title }}</h4>
                      <p class="mb-0">{{ list.description }}</p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-6 col-md-12  show_content">
            <div :id="list.id" v-for="(list,index) in List" :key="index" :class=" list.active !== undefined && list.active ? 'tab-pane fade active show' : 'tab-pane fade'">
              <img :src=" list.image" class="img-fluid" alt="img">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { sofbox } from "../../assets/app/app";
export default {
  name: 'Servicetabs',
  mounted () {
    sofbox.activeTabPane();
  },
  data () {
    return {
      titleSectionProp: {
        class: 'text-center',
        title: 'What Sofbox can do for you?',
        description: 'If you are planning on developing a product landing'
      },

      List: [
        {
          title: 'Unique Design',
          id: 'tab-unique-design',
          image: require('../../assets/sofbox-v2/images/home-9/96.png'),
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          active: true
        },
        {
          title: 'Easy to Customize',
          id: 'tab-easy-to-customize',
          image: require('../../assets/sofbox-v2/images/home-6/615.png'),
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          active: false
        },
        {
          title: 'Multipurpose layout',
          id: 'tab-multipurpose-layout',
          image: require('../../assets/sofbox-v2/images/home-6/612.jpg'),
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          active: false
        }
      ]
    }
  }
}
</script>
