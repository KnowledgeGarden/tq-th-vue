<template>
  <b-card>
    <b-table
      striped
      hover
      responsive
      :items="items"
      :fields="fields"
    >
      <template slot="tags" slot-scope="row">
        <b-button pill size="sm" variant="info" v-for="tag in row.item.label" :key="tag">{{ tag }}</b-button>
      </template>
    </b-table>
  </b-card>
</template>

<script>
  export default {
    name: "SearchTable",
    props: {
      items: Array,
      fields: Array,
    },
  }
</script>
