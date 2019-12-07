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
  async mounted() {
    const id = this.$route.params.id;
    this.$data.userid = id;
    this.json = await this.$store.dispatch("FETCH_USER_PIV", { id: id, offset: 0, count: 500 });
  },

}
</script>