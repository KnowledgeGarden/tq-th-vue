<template>
<b-container fluid>
    <h1>Resources</h1>
    <b-input v-model="searchbar" placeholder="Search Resources"></b-input>
    <b-card>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="resourceTable"
        align="center"
      ></b-pagination>
      <b-table
        id="resourceTable"
        striped
        hover
        responsive
        :per-page="perPage"
        :current-page="currentPage"
        :items="filteredList"
        :fields="fields"
      >
        <template slot="url" slot-scope="row">
          <a target="_blank" :href="row.item.url" rel="noopener noreferrer">{{ row.item.url }}</a>
        </template>
      </b-table>
    </b-card>

  </b-container>
</template>

<script>
  export default {
    name: "ResourceTable",
    props: {
      items: Array,
      fields: Array,
    },
  }
</script>
