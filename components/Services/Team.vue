<template>
  <!-- our team -->
  <section id="team" class="overview-block-ptb grey-bg iq-team-main">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
            <div class="heading-title">
              <h3 class="title iq-tw-7">{{ $t("about.team.title") }}</h3>
               <p>{{ $t("about.team.description") }}</p>
            </div>
          </div>
      </div>
      <div class="row">
        <div v-for="(list,index) in temeList" :key="index" class="col-lg-6 col-sm-6 iq-mb-30">
          <CardStyle3>
            <div slot="cardMedia">
              <img alt="" class="img-fluid" :src="list.media">
            </div>
            <div slot="cardTitle">
              <!--<a href="team-details-1.html">-->
                <h6 class="iq-tw-6">{{ list.title }}</h6>
              <!--</a>-->
              <span class="team-post">{{ list.subtitle }}</span>
            </div>
            <ul slot="cardFooter" class="list-inline">
              <li v-for="(social,sindex) in list.socialLinks" :key="sindex">
                <a :href="social.link"> <i :class="social.icon" /> </a>
              </li>
            </ul>
          </CardStyle3>
        </div>
      </div>
    </div>
  </section>
  <!-- our team  end-->
</template>

<script>
import CardStyle3 from '../sofbox/Card/CardStyle3'
export default {
  name: 'Team',
  components: { CardStyle3 },
  data () {
    return {
      temeList: [
        {
          media: require('../../assets/images/team/small/01.jpg'),
          title: 'Raúl Jareño',
          subtitle: 'CEO, Appio',
          socialLinks: [
            { icon: 'fab fab-team fa-linkedin', link: '#' },
            { icon: 'fab fab-team fa-github', link: '#' },
            /*{ icon: 'fab fa-youtube', link: '#' }*/
          ]
        },
        {
          media: require('../../assets/images/team/small/02.jpg'),
          title: 'Patricia Gruart',
          subtitle: 'Sales Manager, Appio',
          socialLinks: [
            
            { icon: 'fab fab-team fa-linkedin', link: '#' },
            { icon: 'fab fab-team fa-instagram', link: '#' },
            { icon: 'fab fab-team fa-facebook', link: '#' },
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
