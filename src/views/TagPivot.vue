<template>
  <h2>Tag: {{ json.label }}</h2>
  
</template>

<script>
export default {
  data() {
    return {
      json: {}
    }
  },
  mounted() {
    const id = this.$route.params.id;
    console.info("TA", id)
    this.$store.dispatch("FETCH_TAG_PIVOT", { id: id, offset: 0, count: 500 });
    this.$data.json = this.$store.state.tagpiv
    console.info("TP", this.$data.json)
  },

}
</script>