<template>
  <d3-network :net-nodes="nodes" :net-links="links" :options="options" />
</template>

<script>
  import D3Network from 'vue-d3-network'
  export default {
    name: "Pivot",
    components: {
      D3Network
    },
    data () {
      return {
        nodes: [
          { id: 1, name: 'my node 1' },
          { id: 2, name: 'my node 2' },
          { id: 3, _color:'orange' },
          { id: 4 },
          { id: 5 },
          { id: 6 },
          { id: 7 },
          { id: 8 },
          { id: 9 }
        ],
        links: [
          { sid: 1, tid: 2, _color:'red' },
          { sid: 2, tid: 8, _color:'f0f' },
          { sid: 8, tid: 4, _color:'rebeccapurple' },
          { sid: 4, tid: 5, _color:'black' },
          { sid: 5, tid: 6, _color:'black' },
          { sid: 7, tid: 8, _color:'black' },
          { sid: 5, tid: 8, _color:'black'},
          { sid: 3, tid: 8, _color:'black' },
          { sid: 7, tid: 9, _color:'black' }
        ],
        options:
        {
          force: 3000,
          nodeSize: 40,
          nodeLabels: true,
          linkWidth: 5
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .net {
    width: 100%;
    height: 100%;
    .net-svg {
      width: 100%;
      height: 100%;
    }
  }
</style>