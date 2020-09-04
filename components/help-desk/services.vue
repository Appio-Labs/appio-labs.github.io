<template>
  <section id="iq-service" class="sofbox-gradient">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="custom-tab horizontaltab">
            <ul id="pills-tab" class="nav nav-pills mb-5 pb-lg-5" role="tablist">
              <li v-for="(list,index) in List" :key="index" class="nav-item">
                <a
                  :class="list.active ? ' active1 nav-link show ': 'nav-link '"
                  :href="'#'+list.id"
                  :aria-selected="list.active"
                  data-toggle="pill"
                  role="tab"
                >
                  <h6 class="tab-title">{{ list.title }}</h6>
                </a>
              </li>
            </ul>
            <div class="show_content">
              <div :id=" list.id " v-for="(list,index) in List" :key="index" :class="list.subclass" role="tabpanel">
                <div class="row align-items-center">
                  <div class="col-lg-7 tab-img-shadow mb-5 mb-lg-0">
                    <img :src="list.image" alt="img">
                  </div>
                  <div class="col-lg-5">
                    <h2 class="mb-3">
                      {{ list.subtitle }}
                    </h2>
                    <p class="mb-0">
                      {{ list.description }}
                    </p>
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
import { sofbox } from "../../assets/app/app";
export default {
  name: 'Services',
  mounted () {
    sofbox.activeTabPane();
  },
  data () {
    return {
      List: [
        {
          title: 'Live Chat Software',
          id: 'tab-live-chat-software',
          image: require('../../assets/sofbox-v2/images/home-3/309.jpeg'),
          subtitle: 'Live Chat Software Included !',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.',
          active: true,
          subclass: 'active show tab-pane fade'
        },
        {
          title: 'Cusomer Services',
          id: 'tab-customer-service',
          image: require('../../assets/sofbox-v2/images/home-3/309.jpeg'),
          subtitle: 'Cusomer Services Included !',
          subclass: 'tab-pane fade',
          active: false,
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.'
        },
        {
          title: 'Customer Conversation',
          id: 'tab-customer-conversation',
          image: require('../../assets/sofbox-v2/images/home-3/309.jpeg'),
          subtitle: 'Customer Conversation !',
          subclass: 'tab-pane fade',
          active: false,
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.'
        },
        {
          title: 'Software For Business',
          id: 'tab-software-for-business',
          image: require('../../assets/sofbox-v2/images/home-3/309.jpeg'),
          subtitle: 'Software For Business Included !!',
          subclass: 'tab-pane fade',
          active: false,
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.'
        }

      ]
    }
  }
}
</script>
