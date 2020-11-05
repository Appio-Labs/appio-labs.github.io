<template>
  <section class="overview-block-ptb iq-specialities">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="heading-title">
            <h3 class="title iq-tw-7">
              {{ $t('services.stack.title') }}
            </h3>
            <p>{{ $t('services.stack.description') }}</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(item,index) of list" :key="index" class="col-sm-12 col-lg-3 col-md-6 iq-mb-30">
          <CardStyle9>
            <i slot="cardMedia"><img class="img-fluid center-block" width="65" height="65" :src="item.icon" :alt="item.title"/></i>
            <!--<i slot="cardMedia" aria-hidden="true" :class="item.icon"></i>-->
            <div slot="cardBody">
              <h5 class="iq-tw-7 iq-pt-20">
                {{ item.title }}
              </h5>
              <h7 class="iq-tw-7 iq-mt-10 iq-mb-30">
                {{ item.section }}
              </h7>
              <p>{{ item.description }}</p>
            </div>
          </CardStyle9>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Specialites',
  data () {
    return {
      list: [
        {
          icon: require('~/assets/images/services/apple.png')/*'ion-ios-monitor-outline'*/,
          title: 'iOS app development',
          section: 'Mobile development',
          description: 'Native Swift apps for all Apple devices'
        },
        {
          icon: require('~/assets/images/services/android.png'),
          title: 'Android app development',
          section: 'Mobile development',
          description: 'Build native apps for Android with Kotlin'
        },
        {
          icon: require('~/assets/images/services/flutter.png'),
          title: 'Flutter',
          section: 'Mobile development',
          description: 'Dart-based cross-platform development'
        },
        {
          icon: require('~/assets/images/services/web.png'),
          title: 'Web app development',
          section: 'Web development',
          description: 'Secure and performant web apps and PWAs'
        },
        {
          icon: require('~/assets/images/services/design.png'),
          title: 'Web design',
          section: 'UI/UX design',
          description: 'Modern and adaptive websites'
        },
        {
          icon: require('~/assets/images/services/design-mobile.png'),
          title: 'Mobile design',
          section: 'UI/UX design',
          description: 'Material and HIG design for mobiles'
        },
        {
          icon: require('~/assets/images/services/testing-manual.png'),
          title: 'Manual testing',
          section: 'Testing',
          description: 'When human intervention is needed'
        },
        {
          icon: require('~/assets/images/services/testing-automation.png'),
          title: 'Automation testing',
          section: 'Testing',
          description: 'For time-consuming & business cases'
        }
      ]
    }
  }
}
</script>
