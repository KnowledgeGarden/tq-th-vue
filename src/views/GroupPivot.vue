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
  mounted() {
    const id = this.$route.params.id;
    console.info("UA", id)

    this.$store.dispatch("FETCH_GROUP_PIV", { id: id, offset: 0, count: 500 });
    this.$data.json = this.$store.state.grouppiv
    console.info("UP", this.$data.json)
  },

}
</script>