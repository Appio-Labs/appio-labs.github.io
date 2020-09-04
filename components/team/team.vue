<template>
  <section class="pt-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <VTwoSectionTitle :title-section-prop="titleSectionProp" />
          <ul class="our-new-team style-two ">
            <li v-for="(team,index) in teams" :key="index">
              <div class="team-blog ">
                <div class="team-images">
                  <img :src="team.src" class="img-fluid" alt="images">
                </div>
                <div class="team-description mb-3 text-center">
                  <h5 class="text-white">
                    {{ team.name }}
                  </h5>
                  <p>{{ team.post }}</p>
                </div>
                <div class="team-social">
                  <ul>
                    <li><a href="#"><i class="fa fa-facebook-f" /></a></li>
                    <li><a href="#"><i class="fa fa-twitter" /></a></li>
                    <li><a href="#"><i class="fa fa-instagram" /></a></li>
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
        title: 'Meet our team',
        description: 'If you are planning on developing a product landing'
      },
      teams: [
        {
          src: require('../../assets/sofbox-v2/images/home-1/21.jpeg'),
          name: 'Sal Monella',
          post: 'Business Advisor'
        },
        {
          src: require('../../assets/sofbox-v2/images/home-1/22.jpeg'),
          name: 'Rick O Shea',
          post: 'Business Advisor'
        },
        {
          src: require('../../assets/sofbox-v2/images/home-1/23.jpeg'),
          name: 'Brock Lee',
          post: 'Business Advisor'
        },
        {
          src: require('../../assets/sofbox-v2/images/home-1/24.jpeg'),
          name: 'Paige Turner',
          post: 'Business Advisor'
        },
        {
          src: require('../../assets/sofbox-v2/images/home-1/25.jpeg'),
          name: ' Gail Forcewind',
          post: 'Business Advisor'
        },
        {
          src: require('../../assets/sofbox-v2/images/home-1/26.jpeg'),
          name: '  Paul Molive',
          post: 'Business Advisor'
        },
        {
          src: require('../../assets/sofbox-v2/images/home-1/27.jpeg'),
          name: '  Anna Sthesia',
          post: 'Business Advisor'
        },
        {
          src: require('../../assets/sofbox-v2/images/home-1/28.jpeg'),
          name: 'Petey Cruiser',
          post: 'Business Advisor'
        },
        {
          src: require('../../assets/sofbox-v2/images/home-1/27.jpeg'),
          name: 'Maxt Hang',
          post: 'Business Advisor'
        },
        {
          src: require('../../assets/sofbox-v2/images/home-1/21.jpeg'),
          name: 'Handry White',
          post: 'Business Advisor'
        },
        {
          src: require('../../assets/sofbox-v2/images/home-1/22.jpeg'),
          name: ' Anna Mull',
          post: 'CEO'
        },
        {
          src: require('../../assets/sofbox-v2/images/home-1/23.jpeg'),
          name: 'Petey Cruiser',
          post: 'COO'
        },
        {
          src: require('../../assets/sofbox-v2/images/home-1/24.jpeg'),
          name: 'Greta Life',
          post: 'Web Designer'
        },
        {
          src: require('../../assets/sofbox-v2/images/home-1/25.jpeg'),
          name: ' Marcash Dane',
          post: 'Project Manager'
        },
        {
          src: require('../../assets/sofbox-v2/images/home-1/26.jpeg'),
          name: 'Jany White',
          post: 'wp developer'
        }
      ]
    }
  }
}
</script>
