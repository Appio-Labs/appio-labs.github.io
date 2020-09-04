<template>
  <section id="how-it-works" class="iq-how-work pt-0">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <BlackSectionTitle title="HOW ITS WORK" subtitle="How Does Sofbox Work" />
        </div>
      </div>
      <div class="row">
        <div v-for="(work,index) in works" :key="index" class="col-lg-4">
          <div class="iq-work wow fadeInUp" data-wow-duration="0.5s">
            <BlackCardStyle1>
              <template v-slot:cardNumber>
                {{ work.num }}
              </template>
              <template v-slot:cardContent>
                <i :class="work.icon" />
                <h4 class=" iq-fw-8">
                  {{ work.title }}
                </h4>
                <p class="mt-3 mb-0">
                  It is a long established fact that a reader will be distracted by the readable
                  content of a page.
                </p>
              </template>
              <template v-slot:cardLink>
                <a class="readmore iq-fw-5" href="service.html"><i class="ion-arrow-right-c" /></a>
              </template>
            </BlackCardStyle1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HowItWork',
  data () {
    return {
      works: [
        {
          num: '01',
          icon: 'flaticon-responsive flaticon mb-3',
          title: 'Easy Install'
        },
        {
          num: '02',
          icon: 'flaticon-monitor flaticon mb-3',
          title: ' Create an Account'
        },
        {
          num: '03',
          icon: 'flaticon-upload flaticon mb-3',
          title: 'Upload Your Data'
        }
      ]
    }
  }
}
</script>
