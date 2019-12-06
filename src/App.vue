<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>

import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

export default {
  components: {
    Header,
    Footer
  },
}
</script>
<style lang="scss">
#app {
  height: 100vh;
  width: 100vw;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text;
  background: $background;
  .card {
    background: $light-gray;
  }
}
</style>
