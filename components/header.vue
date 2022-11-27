<template>
  <header>
    <p> {{ this.lang === 'rus' ? 'тема:' : 'theme:'}}</p>
    <button
      :class="(this.theme === 'dark') && 'btn_active'"
      @click="toggleTheme('dark')"
    >
      dark
    </button>
    <button
      :class="(this.theme === 'light') && 'btn_active'"
      @click="toggleTheme('light')"
    >
      light
    </button>
    <p> {{ this.lang === 'rus' ? 'язык:' : 'lang:'}}</p>
    <button
      :class="(this.lang === 'rus') && 'btn_active'"
      @click="toggleLang('rus')"
    >
      rus
    </button>
    <button
      :class="(this.lang === 'eng') && 'btn_active'"
      @click="toggleLang('eng')"
    >
      eng
    </button>
  </header>
</template>

<script>


export default {
  name: 'Header',
  data() {
    return {
      langData: this.$store.state.store.lang,
      themeData: this.$store.state.store.theme,
    }
  },
  computed: {
    lang() {
      return this.$store.state.store.lang
    },
    theme() {
      return this.$store.state.store.theme
    }
  },
  methods: {
    toggleLang(str) {
      this.$store.commit('store/setLang', str)
    },
    toggleTheme(str) {
      this.$store.commit('store/setTheme', str)
    }
  },
  mounted() {
    const saved = localStorage.getItem('lang')
    if (saved) this.$store.commit('store/setLang', saved)
    const savedTheme = localStorage.getItem('theme')
    if (saved) this.$store.commit('store/setTheme', savedTheme)
  }
}
</script>

<style>
header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid lightgray;
  padding-bottom: 12px;
}

header > p {
  color: dodgerblue;
}

button {
  width: 52px !important;
  height: 32px;
  border: 1px solid black;
  border-radius: 12px;
  transition: 0.3s;
}

button:hover, .btn_active:hover {
  background: cornflowerblue;
  color: white;
}

button.btn_active {
  background: lightblue;
}
</style>
