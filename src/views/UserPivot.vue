<template>
  <div>
    <h2>User: {{userid}}</h2>
    {{ json.tags }}
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      userid: '',
      json: {}
    }
  },
  mounted() {
    const id = this.$route.params.id;
    this.$data.userid = id;
    this.$store.dispatch("FETCH_USER_PIV", { id: id, offset: 0, count: 500 });
    this.$data.json = this.$store.state.userpiv
    console.info("UP", this.$data.json)
  },

}
</script>