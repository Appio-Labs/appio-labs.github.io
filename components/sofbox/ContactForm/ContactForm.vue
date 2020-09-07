<template>
  <form method="post" @submit.prevent="onSubmit($event)" autocomplete="off">
    <div class="contact-form">
      <div class="section-field">
        <input
          id="contact_name"
          v-model="mailData.name"
          class="require"
          type="text"
          placeholder="Name*"
          name="name"
          required
        >
      </div>
      <div class="section-field">
        <input
          id="contact_email"
          v-model="mailData.email"
          class="require"
          type="email"
          placeholder="Email*"
          name="email"
          required
        >
      </div>
      <div class="section-field">
        <input
          id="contact_phone"
          v-model="mailData.phone"
          class="require"
          type="text"
          placeholder="Phone*"
          name="phone"
          required
        >
      </div>
      <div class="section-field textarea">
        <label for="contact_message"></label><textarea
          id="contact_message"
          v-model="mailData.message"
          class="input-message require"
          placeholder="Comment*"
          rows="5"
          name="message"
          required></textarea>
      </div>
      <div class="section-field iq-mt-40">
        <!--<div class="g-recaptcha" data-sitekey="6LdA3mYUAAAAANpUuZTLbKM_s23tTHlcdJ7dYfgI"></div>-->
        <!--<re-captcha (resolved)="resolved($event)" class="google-recaptcha" size="invisible" siteKey="6LdoGLQUAAAAAHXWWr3HKFpCmEm768SZ8acyeRKq"></re-captcha>-->
      </div>
      <button id="submit" name="submit" type="submit" value="Send" :class="buttonDis ? 'button iq-mb-20 disabled' : 'button iq-mb-20 '">
        Send Message
      </button>
      <div id="success" class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Thank You, Your message has been received.</strong>.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  name: 'ContactForm',
  data () {
    return {
      buttonDis: false,
      mailData: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
      formInvalid: false
    }
  },
  methods: {
    onSubmit ($event) {
      /*event.preventDefault()
      if (this.email !== null && this.name !== null && this.message !== null && this.phone !== null) {
        this.formInvalid = false
        this.isLoading = true
        this.formSubmitted = false
        emailjs.init('user_rDy0ktiWPEbQ2EIs72yDU')
        this.contact_number = Math.random() * 100000 | 0
        emailjs.send(
          'template_name',//get this from emailjs dashboard
          'template_someid',//get this from emailjs dashboard
          {email: this.email, name: this.name, message: this.message, phone: this.phone}
        ).then((response) => {
          this.formSubmitted = true
          this.isLoading = false
          console.log('SUCCESS You just sent an email...', response)
        }, (error) => {
          console.log('FAILED Throw an error to user...', error)
          this.isLoading = false
        })
      } else {
        this.formInvalid = true
      }*/

        /*event.preventDefault()
        console.log(this.ContactForm)
        this.$axios.post('api/mailserver.php',
        querystring.stringify(this.ContactForm)).then(res => {
          this.sent = true
        })*/
    }
  }
}
</script>


