<template>
  <b-container fluid id="search">
    <h2>Text Search</h2>
    <div id="searchbar">
      <b-form @submit.prevent="onSubmitSearch">
        <b-input v-model="query" placeholder="Enter Search Term"/>
        <div>
          <b-spinner
            v-if="isFetching"
            type="grow"
            label="Loading..."
          ></b-spinner>
          <b-btn
            v-else
            class="mt-2"
            type="submit"
          >
            Search
          </b-btn>
        </div>
      </b-form>
    </div>
    <!--<div v-if="hits.length">-->
      <h2>{{ hits.length }} search results for: {{ query }}</h2>
    <!--</div>-->
    <div id="scrollbox">
      <ul class="list-group">
        <li class="list-group-item" v-for="item in hits" :key="item.docId">
          <a v-bind:href="`/respiv/${item.docId}`">{{item.label}}</a>
        </li>
      </ul>
    </div>
  </b-container>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: "search",
    computed: {
      ...mapState(['isFetching'])
    },
    data() {
      return {
        query: '',
        hits: []
      }
    },
    methods: {
      async onSubmitSearch() {
        this.hits = await this.$store.dispatch("FETCH_TEXT", {term: this.query, offset: 0, count: 500});
        console.info('SRCH', this.hits)
      }
    }
  };
</script>

<style lang="scss">
  #search {
    height: 100%;
    width: 100%;
    padding: 5% 0;
  }
  #searchbar {
    height: 90px;
    padding-left: 80px;
    padding-right: 80px;
    background-color:lightgray;
  }
  #scrollbox {
    overflow: auto;
    height: 300px;
    padding-left: 20px;
    padding-right: 20px;
    border-style: solid;
    border-width: 1px;
  }
</style>
