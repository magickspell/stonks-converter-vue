<template>
  <form @submit.prevent>
    <v-container fluid>
      <v-row align="center" justify="space-between">
        <v-col
          class="d-flex"
          cols="12"
          md="3"
        >
          <p>{{ this.lang === 'eng' ? 'VALUE:' : 'ЗНАЧЕНИЕ:' }}</p>
          <v-text-field
            type="number"
            :value="count"
            @input="$emit('selectorCount', $event)"
          ></v-text-field>
        </v-col>
        <v-col
          class="d-flex"
          cols="12"
          md="3"
        >
          <p>{{ this.lang === 'eng' ? 'FROM:' : 'ИЗ ВАЛЮТЫ:' }}</p>
          <v-select
            @change="$emit('selectorInputFrom', $event)"
            :value="this.valueFrom"
            :items="itemsFrom"
            label="from"
            solo
          ></v-select>
        </v-col>
        <v-col
          class="d-flex"
          cols="12"
          md="3"
        >
          <p>{{ this.lang === 'eng' ? 'TO:' : 'К ВАЛЮТЕ:' }}</p>
          <v-select
            @change="$emit('selectorInputTo', $event)"
            :value="this.valueTo"
            :items="itemsTo"
            label="to"
            solo
          ></v-select>
        </v-col>
        <v-col
          class="d-flex"
          cols="12"
          md="3"
        >
          <p>{{ this.lang === 'eng' ? 'RESULT:' : 'РЕЗУЛЬТАТ:' }}</p>
          <v-text-field
            :disabled="true"
            type="number"
            :value="countResult"
            @input="$emit('selectorCountResult', $event)"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </form>
</template>

<script>
export default {
  props: {
    items: Array,
    itemsFrom: Array,
    itemsTo: Array,
    valueFrom: String,
    valueTo: String,
    count: Number,
    countResult: Number,
  },
  emits: [
    'selectorInput'
  ],
  data() {
    return {
      langData: this.$store.state.store.lang
    }
  },
  computed: {
    lang() {
      return this.$store.state.store.lang
    }
  }
}
</script>

<style>
input {
  color: black !important;
}
</style>
