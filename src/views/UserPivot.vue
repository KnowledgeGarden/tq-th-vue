<template>
  <b-container fluid>
    <div id="top">
      <h2>User: {{userid}}</h2>
    </div>
    <div id="resources">
      <span style="text-align: center;"><h3>Resources</h3></span>
     <div id="scrollcontainer-r">
        <ul class="list-group">
          <li class="list-group-item" v-for="item in json.documents" :key="item.docid">
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
// userpivot shows the user's
//  resources -- a scrolling list WIDE
//    just show the title as a pivot href
//  tags -- a scrolling list NARROW
//    show the tag lable as a pivot href
//  groups -- a scrolling list NARROW sidebyside
//    show the group name as a pivot href
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