<template>
  <b-container fluid>
    <h1>Triples</h1>
    <b-input v-model="searchbar" placeholder="Search Resources"></b-input>
    <b-card>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="tripleTable"
        align="center"
      ></b-pagination>
      <b-table
        id="tripleTable"
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
      </b-table>
    </b-card>

  </b-container>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  export default {
    mounted(){
      if (!this.$store.state.triples.length) {
        this.$store.dispatch("FETCH_TRIPLES", { offset: 0, count: 500 });
      }
    },
    computed: {
      rows() {
        return this.filteredList.length
      },
      ...mapState({
        items: 'triples'
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
            label: 'Annotation',
          }, 
          {
            key: 'subject',
            label: 'Subject',
            sortable: true
          },
          {
            key: 'predicate',
            label: 'Predicate',
            sortable: true
          },
          {
            key: 'object',
            label: 'Object',
            sortable: true
          }
        ]
      }
    }
  };
</script>
