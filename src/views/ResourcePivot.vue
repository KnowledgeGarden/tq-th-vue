<template>
  <b-container fluid>
    <div id="top">
      <h2>Title: {{ json.title }}</h2>
      <h3>URL: <a :href="`${json.url}`">{{ json.url }}</a></h3>
    </div>
    <div id="resources">
      <span style="text-align: center;"><h3>Text</h3></span>
     <div id="scrollcontainer-r">
        <ul class="list-group">
          <li class="list-group-item" v-for="item in json.text" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div id="threecolumn">
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
      <div id="middle">
        <span style="text-align: center;"><h3>Users</h3></span>
        <div id="scrollcontainer">
          <ul class="list-group">
            <li class="list-group-item" v-for="item in json.users" :key="item">
              <a v-bind:href="`/userpiv/${item}`">{{item}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="right">
        <span style="text-align: center;"><h3>Groups</h3></span>
        <div id="scrollcontainer">
          <ul class="list-group">
            <li class="list-group-item" v-for="item in json.groups" :key="item.groupId">
              <a v-bind:href="`/grouppiv/${item.groupId}`">{{item.name}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
// a resource paints its
//  text
//  users
//  groups
//  tags
  export default {
    data() {
      return {
        json: {}
      }
    },
    async mounted() {
      const id = this.$route.params.id;
      console.info("RP", id)
      this.json = await this.$store.dispatch("FETCH_RESOURCE_PIV", { id: id, offset: 0, count: 500 });
      console.info("ResPiv", this.json)
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
    text-align: left;
  }

  #scrollcontainer {
    overflow: auto;
    height: 170px;
  }
  #threecolumn {
    display: grid;
    grid-template-columns: auto auto auto;
    padding-top: 2px;
    padding-left: 5px;
    padding-right: 5px;
  }
  #left {
    height: 220px;
    border-style: solid;
    border-width: 1px;
  }
  #middle {
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