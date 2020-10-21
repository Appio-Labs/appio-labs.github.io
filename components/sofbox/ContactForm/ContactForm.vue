<template>
  <form method="post" @submit.prevent="onSubmit($event)" autocomplete="off">
    <div class="contact-form">
      <div class="section-field">
        <input
          id="contact_name"
          v-model="mailData.name"
          class="require"
          type="text"
          :placeholder="$t('contact.name')"
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
          :placeholder="$t('contact.email')"
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
          :placeholder="$t('contact.phone')"
          name="phone"
          required
        >
      </div>
      <div class="section-field textarea">
        <label for="contact_message"></label><textarea
          id="contact_message"
          v-model="mailData.message"
          class="input-message require"
          :placeholder="$t('contact.comment')"
          rows="5"
          name="message"
          required></textarea>
      </div>
      <div class="section-field iq-mt-40">
        <!--<div class="g-recaptcha" data-sitekey="6LdA3mYUAAAAANpUuZTLbKM_s23tTHlcdJ7dYfgI"></div>-->
        <!--<re-captcha (resolved)="resolved($event)" class="google-recaptcha" size="invisible" siteKey="6LdoGLQUAAAAAHXWWr3HKFpCmEm768SZ8acyeRKq"></re-captcha>-->
      </div>
      <button id="submit" name="submit" type="submit" value="Send" :class="buttonDis ? 'button iq-mb-20 disabled' : 'button iq-mb-20 '">
        {{ $t('contact.send') }}
      </button>
      <!--<div id="success" class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Thank You, Your message has been received.</strong>.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>-->
    </div>
  </form>
</template>
<script>
import emailjs from 'emailjs-com';
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
      emailjs.sendForm('service_2y7yurh', 'template_14ppd5a', event.target, 'user_cxwtwfZxUVzWr5LTgHCue') //Service ID, Template ID, User ID
      .then((result) => {
            alert('Thank You, Your message has been received.')
        }, (error) => {
            alert('Sorry, there was an error while sending the message, please try it again later.')
        });
    }
  }
}
</script>


