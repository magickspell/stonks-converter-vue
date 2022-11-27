<template>
  <section class="wrapper_main-page">
    <selector data-app
              :itemsFrom="itemsFrom"
              :itemsTo="itemsTo"
              :valueFrom="valueFrom"
              :valueTo="valueTo"
              :count="count"
              :countResult="countResult"
              @selectorInputFrom="(value) => valueFrom = value"
              @selectorInputTo="(value) => valueTo = value"
              @selectorCount="(value) => count = Number(value)"
              @selectorCountResult="(value) => countResult = Number(value)"
    />
    <img class="stonks-img" src="/stonksSmall.jpg" alt="">
  </section>
</template>

<script>
import Selector from "~/components/selector";

export default {
  name: 'IndexPage',
  components: {
    Selector,
  },
  data() {
    return {
      items: ['USD', 'EUR', 'RUB'],
      itemsFrom: [],
      itemsTo: [],
      valueFrom: 'USD',
      valueTo: 'RUB',
      rate: 0,
      count: 0,
      countResult: 0,
      url: '',
      loading: true
    }
  },
  methods: {
    async fetchCurrency() {
      await fetch(this.url).then((res) => {
        return res.json()
      }).then((data) => {
        if (data.status && data.status !== 200) throw new Error(JSON.stringify(data))
        this.rate = data[Object.keys(data)[0]].ask
        this.$store.commit('store/setCurrency', this.valueFrom)
        this.countResult = Number(this.count) * Number(this.rate)
      }).catch((e) => {
        console.warn(e)
        alert(e)
      })
    },
    replaceCurr() {
      this.itemsFrom = this.items.filter(i => i !== this.valueTo)
      this.itemsTo = this.items.filter(i => i !== this.valueFrom)
      if (this.valueFrom === this.valueTo) this.valueTo = this.itemsTo[0]
    }
  },
  mounted() {
    const saved = localStorage.getItem('currency')
    if (saved) {
      this.$store.commit('store/setCurrency', saved)
      this.valueFrom = saved
    }
    this.replaceCurr()
    this.url = `https://economia.awesomeapi.com.br/last/${this.valueFrom}-${this.valueTo}`
    this.fetchCurrency()
  },
  watch: {
    valueFrom() {
      this.replaceCurr()
      this.url = `https://economia.awesomeapi.com.br/last/${this.valueFrom}-${this.valueTo}`
      this.fetchCurrency()
    },
    valueTo() {
      this.replaceCurr()
      this.url = `https://economia.awesomeapi.com.br/last/${this.valueFrom}-${this.valueTo}`
      this.fetchCurrency()
    },
    count() {
      this.url = `https://economia.awesomeapi.com.br/last/${this.valueFrom}-${this.valueTo}`
      this.fetchCurrency()
    }
  }
}
</script>

<style>
body {
  min-width: 320px;
}

.wrapper_main-page {
  background: darkgray;
  padding-bottom: 20px;
  border-radius: 16px 16px 0 0;
}

.stonks-img {
  display: block;
  margin: 0 auto;
  width: 60%;
  min-width: 320px;
  max-width: 400px;
  border-radius: 20px;
}
</style>
