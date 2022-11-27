<template>
  <div class="navigation">
    <NuxtLink to="/" :class="this.route === '/' && 'active'">
      {{ this.lang === 'eng' ? 'converter' : 'конвертер' }}
    </NuxtLink>
    <NuxtLink to="/currencys" :class="this.route !== '/' && 'active'">
      {{ this.lang === 'eng' ? 'currencys' : 'курсы валюты' }}
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      routeData: this.$nuxt.$route.path,
      langData: this.$store.state.store.lang,
    }
  },
  computed: {
    route() {
      return this.$nuxt.$route.path
    },
    lang() {
      return this.$store.state.store.lang
    }
  }
}
</script>

<style>
.navigation {
  display: flex;
  justify-content: space-around;
  height: 60px;
  padding: 16px 8px;
}

a {
  font-size: 22px;
  color: cornflowerblue;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.3s;
}

a:hover {
  transform: scale(1.2);
}

a.active {
  text-decoration: underline;
  color: dodgerblue;
}
</style>
