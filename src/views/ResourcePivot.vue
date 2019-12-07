<template>
  <div>
    <h2>Title: {{ json.title }}</h2>
    <h3>URL: <a href="${json.url}">{{ json.url}}</a></h3>
  </div>
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
    console.info("RA", id)

    this.json = await this.$store.dispatch("FETCH_RESOURCE_PIV", { id: id, offset: 0, count: 500 });
  },

}
</script>