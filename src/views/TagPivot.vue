<template>
  <div>
    <h2>Tag: {{ json.label }}</h2>
    {{ json.documents }}
  </div>
  
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
    console.info("TA", id)
    this.json = await this.$store.dispatch("FETCH_TAG_PIVOT", { id: id, offset: 0, count: 500 });
  },

}
</script>