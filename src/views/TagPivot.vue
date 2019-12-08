<template>
  <b-container fluid>
    <div id="top">
      <h2>Tag: {{ json.label }}</h2>
    </div>
    {{ json.documents }}
  </b-container>
  
</template>

<script>
export default {
  data() {
    return {
      json: {},
      jx: {}
    }
  },
  async mounted() {
    const id = this.$route.params.id;
    this.json = await this.$store.dispatch("FETCH_TAG_PIVOT", { id: id, offset: 0, count: 500 });
  }

}
</script>
<style scoped>
  #top {
    text-align: left;
    padding-left: 20px;
  }
</style>