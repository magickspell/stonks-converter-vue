<template>
  <section class="wrapper_currency-page" data-app>
    <v-container fluid>
      <v-row align="center">
        <v-col
          class="d-flex"
          cols="12"
          md="3"
        >
          <p>{{ this.lang === 'eng' ? 'CURRENCY:' : 'ВАЛЮТА:' }}</p>
          <v-select
            @change="$event => this.value = $event"
            :value="this.value"
            :items="items"
            label="currency"
            solo
          ></v-select>
        </v-col>
      </v-row>
    </v-container>

    <ul v-if="!loading">
      <li>
        <p>{{ this.lang === 'eng' ? 'to currency:' : 'к валюте:' }}</p>
        <p>{{ this.lang === 'eng' ? 'its value:' : 'ее значение:' }}</p>
      </li>
      <li v-for="el in data">
        <p>
          {{ el.codein }}
        </p>
        <p>
          {{ el.ask }}
        </p>
      </li>
    </ul>
    <p v-else><b>Loading...</b></p>
    <img class="stonks-cur-img" :src="(this.lang === 'rus') ? '/pribil.jpg' : '/whathappens.jpg' " alt="">
  </section>
</template>

<script>
export default {
  name: 'CurrencyPage',
  data() {
    return {
      items: ['USD', 'EUR', 'RUB'],
      value: 'USD',
      url: '',
      loading: true,
      data: {},
      langData: this.$store.state.store.lang,
      currencyData: this.$store.state.store.currency,
    }
  },
  computed: {
    lang() {
      return this.$store.state.store.lang
    },
    currency() {
      return this.$store.state.store.currency
    }
  },
  methods: {
    async fetchCurrency() {
      await fetch(this.url).then((res) => {
        return res.json()
      }).then((data) => {
        if (data.status && data.status !== 200) throw new Error(JSON.stringify(data))
        this.data = data
        this.$store.commit('store/setCurrency', this.value)
        this.loading = false
      }).catch((e) => {
        console.warn(e)
        alert(e)
      })
    }
  },
  mounted() {
    const saved = localStorage.getItem('currency')
    if (saved) {
      this.$store.commit('store/setCurrency', saved)
      this.value = saved
    }
    let newItems = this.items.map(i => i)
    newItems.splice(newItems.indexOf(this.currency), 1)
    newItems = newItems.map(i => {
      return `${this.currency}-${i}`
    })
    this.url = `https://economia.awesomeapi.com.br/last/${newItems.join(',')}`
    this.fetchCurrency()
  },
  watch: {
    value(newValue) {
      this.$store.commit('store/setCurrency', newValue)
      let newItems = this.items.map(i => i)
      newItems.splice(newItems.indexOf(newValue), 1)
      newItems = newItems.map(i => `${newValue}-${i}`)
      this.url = `https://economia.awesomeapi.com.br/last/${newItems.join(',')}`
      this.fetchCurrency()
    }
  }
}
</script>

<style>
.wrapper_currency-page {
  background: darkgray;
  padding: 16px 8px 24px;
  border-radius: 16px 16px 0 0;
}

ul {
  width: 88%;
  margin: 0 auto;
}

li {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 100%;
  font-size: 20px;
  padding: 8px 4px;
}

li:nth-child(2n) {
  background: whitesmoke;
}

li > p:first-child {
  width: 140px;
}

.stonks-cur-img {
  display: block;
  margin: 0 auto;
  width: 60%;
  min-width: 320px;
  max-width: 400px;
  border-radius: 20px;
}
</style>
