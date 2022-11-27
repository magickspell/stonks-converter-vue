<template>
  <section class="wrapper_error">
    <p v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </p>
  </section>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: 'ERROR: 404 -  page not found, click the links above',
      otherError: 'ERROR: an error occurred, contact your admins'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>

section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  border: 4px solid firebrick;
  border-radius: 20px 20px 0 0;
  background: lightgray;
  padding: 12px;
}

p {
  font-size: 32px;
  color: firebrick;
}
</style>
