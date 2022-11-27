<template>
  <v-footer padless>
    <v-col
      class="text-center"
      cols="12"
    >
      <strong>VUE STONKS</strong>
      - {{ new Date().getFullYear() }}
      <p class="footer__description">
        {{
          this.lang === 'eng'
            ? '* app remember your default currency, theme and lang in cache'
            : '* приложение запоминает дефолтную валюту, тему и язык в кеше'
        }}
      </p>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      langData: this.$store.state.store.lang
    }
  },
  computed: {
    lang() {
      return this.$store.state.store.lang
    }
  },
}
</script>

<style>
footer {
  padding: 16px 0 !important;
  background: lightgray !important;
  border-radius: 0 0 16px 16px !important;
}

.footer__description {
  max-width: 640px;
  width: 90%;
  margin-top: 12px;
}
</style>
