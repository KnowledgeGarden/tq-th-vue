<template>
  <b-container fluid>
    <div id="top">
      <h2>Group: {{json.name}}</h2>
    </div>
<div id="resources">
      <span style="text-align: center;"><h3>Resources</h3></span>
     <div id="scrollcontainer-r">
        <ul class="list-group">
          <li class="list-group-item" v-for="item in json.documents" :key="item.docId">
            <a v-bind:href="`/respiv/${item.docId}`">{{item.title}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div id="twocolumn">
      <div id="left">
        <span style="text-align: center;"><h3>Tags</h3></span>
        <div id="scrollcontainer">
          <ul class="list-group">
            <li class="list-group-item" v-for="item in json.tags" :key="item.id">
              <a v-bind:href="`/tagpiv/${item.id}`">{{item.label}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="right">
        <span style="text-align: center;"><h3>Users</h3></span>
        <div id="scrollcontainer">
          <ul class="list-group">
            <li class="list-group-item" v-for="item in json.users" :key="item">
              <a v-bind:href="`/userpiv/${item}`">{{item}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
      
  </b-container>
  
</template>

<script>
// a group paints its
//  resources
//  users
//  tags
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
  #resources {
    height: 300px;
    width: 100%;
    padding-left: 5px;
    padding-right: 5px;
    border-style: solid;
    border-width: 1px;
  }
  #scrollcontainer-r {
    overflow: auto;
    height: 250px;
  }

  #scrollcontainer {
    overflow: auto;
    height: 170px;
  }
  #twocolumn {
    display: grid;
    grid-template-columns: auto auto;
    padding-top: 2px;
    padding-left: 5px;
    padding-right: 5px;
  }
  #left {
    height: 220px;
    border-style: solid;
    border-width: 1px;
  }
  #right {
    height: 220px;
    border-style: solid;
    border-width: 1px;
  }
</style>