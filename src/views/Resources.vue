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
        <template slot="docId" slot-scope="row">
          <a :href="`/respiv/${row.item.docId}`">View</a>
        </template>
        <template slot="url" slot-scope="row">
          <a target="_blank" :href="row.item.url" rel="noopener noreferrer">{{ row.item.url }}</a>
        </template>
      </b-table>
    </b-card>

  </b-container>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  export default {
    mounted(){
      if (!this.$store.state.resources.length) {
        this.$store.dispatch("FETCH_RESOURCES", { offset: 0, count: 500 });
      }
    },
    computed: {
      rows() {
        return this.filteredList.length
      },
      ...mapState({
        items: 'resources'
      }),
      filteredList() {
        return this.items.filter(resource => {
          return resource.title.toLowerCase().includes(this.searchbar.toLowerCase())
        });
      }
    },
    data() {
      return {
        searchbar: '',
        perPage: 8,
        currentPage: 1,
        fields: [
          {
            key: 'docId',
            label: 'Pivot',
          }, 
          {
            key: 'title',
            label: 'Article',
            sortable: true
          },
          {
            key: 'url',
            label: 'Link',
            sortable: true
          }
        ]
      }
    }
  };
</script>
