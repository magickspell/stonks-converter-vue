<template>
  <div class="wrapper_root">
    <Header/>

    <nav>
      <Navigation/>
    </nav>

    <Nuxt/>

    <Footer/>
  </div>
</template>

<script>
import Footer from "~/components/footer";
import Navigation from "~/components/navigation";
import Header from "@/components/header";

export default {
  name: 'DefaultLayout',
  components: {
    Footer,
    Navigation,
    Header
  },
  data() {
    return {
      themeData: this.$store.state.store.theme
    }
  },
  computed: {
    theme() {
      return this.$store.state.store.theme
    }
  },
  methods: {
    toggleTheme() {
      if (this.theme === 'dark') {
        document.body.classList.remove('light')
        document.body.classList.add('dark')
      } else if (this.theme === 'light') {
        document.body.classList.remove('dark')
        document.body.classList.add('light')
      }
    }
  },
  mounted() {
    const saved = localStorage.getItem('theme')
    if (saved) this.$store.commit('store/setTheme', saved)
    this.toggleTheme()
  },
  watch: {
    theme() {
      this.toggleTheme()
    }
  }
}
</script>

<style>
* {
  font-family: monospace, sans-serif;
}

body {
  padding: 16px 8px;
}

body.light {
  background: lightyellow;
}

body.dark {
  background: rgba(0, 0, 0, 0.70);
}

header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid lightgray;
  padding-bottom: 12px;
}

button {
  width: 40px;
  height: 32px;
  border: 1px solid black;
  border-radius: 12px;
  transition: 0.3s;
}

button:hover {
  background: cornflowerblue;
  color: white;
}

button.btn_active {
  background: lightblue;
}
</style>
