<template>
  <b-container fluid>
    <div id="top">
      <h2>Group: {{json.name}}</h2>
    </div>
    {{ json.tags }}
  </b-container>
  
</template>

<script>
export default {
  data() {
    return {
      json: {}
    }
  },
  async mounted() {
    const id = this.$route.params.id;
    this.json = await this.$store.dispatch("FETCH_GROUP_PIV", { id: id, offset: 0, count: 500 });
  }

}
</script>
<style scoped>
  #top {
    text-align: left;
    padding-left: 20px;
  }
</style>