<template>
  <section id="iq-team">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <VTwoSectionTitle :title-section-prop="titleSectionProp" />
          <ul class="our-new-team">
            <li v-for="(list,index) in List" :key="index">
              <div class="team-blog">
                <div class="team-images">
                  <img :src="list.image" class="img-fluid" alt="#0">
                </div>
                <div class="team-description mb-3 text-center">
                  <h5 class="text-white">
                    {{ list.name }}
                  </h5>
                  <p>{{ list.title }}</p>
                </div>
                <div class="team-social">
                  <ul>
                    <li v-for="(link,index1) in list.link" :key="index1" *ngFor="let link of list.links">
                      <a href="#"><i :class="link.icon" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Team',
  data () {
    return {
      titleSectionProp: {
        title: 'What Sofbox can do for you?',
        description: 'If you are planning on developing a product landing'
      },

      List: [
        {
          name: 'Sal Monella',
          title: 'Business Advisor',
          image: require('../../assets/sofbox-v2/images/home-2/214.jpeg'),
          links: [{ icon: 'fa fa-facebook-f' }, { icon: 'fa fa-twitter' }, { icon: 'fa fa-instagram' }]
        },
        {
          name: 'Rick O\'Shea',
          title: 'Business Advisor',
          image: require('../../assets/sofbox-v2/images/home-2/215.jpeg'),
          links: [{ icon: 'fa fa-facebook-f' }, { icon: 'fa fa-twitter' }, { icon: 'fa fa-instagram' }]
        },
        {
          name: 'Brock Lee',
          title: 'Business Advisor',
          image: require('../../assets/sofbox-v2/images/home-2/216.jpeg'),
          links: [{ icon: 'fa fa-facebook-f' }, { icon: 'fa fa-twitter' }, { icon: 'fa fa-instagram' }]
        },
        {
          name: 'Paige Turner',
          title: 'Business Advisor',
          image: require('../../assets/sofbox-v2/images/home-2/217.jpeg'),
          links: [{ icon: 'fa fa-facebook-f' }, { icon: 'fa fa-twitter' }, { icon: 'fa fa-instagram' }]
        },
        {
          name: 'Gail Forcewind',
          title: 'Business Advisor',
          image: require('../../assets/sofbox-v2/images/home-2/218.jpeg'),
          links: [{ icon: 'fa fa-facebook-f' }, { icon: 'fa fa-twitter' }, { icon: 'fa fa-instagram' }]
        },
        {
          name: 'Paul Molive',
          title: 'Business Advisor',
          image: require('../../assets/sofbox-v2/images/home-2/219.jpeg'),
          links: [{ icon: 'fa fa-facebook-f' }, { icon: 'fa fa-twitter' }, { icon: 'fa fa-instagram' }]
        },
        {
          name: 'Anna Sthesia',
          title: 'Business Advisor',
          image: require('../../assets/sofbox-v2/images/home-2/220.jpeg'),
          links: [{ icon: 'fa fa-facebook-f' }, { icon: 'fa fa-twitter' }, { icon: 'fa fa-instagram' }]
        }
      ]

    }
  }
}
</script>
