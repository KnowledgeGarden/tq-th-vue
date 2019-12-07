<template>
  <div>
    <h2>group: {{json.name}}</h2>
    {{ json.tags }}
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
    console.info("UA", id)

    this.json = await this.$store.dispatch("FETCH_GROUP_PIV", { id: id, offset: 0, count: 500 });
  },

}
</script>