<template>
  <b-container fluid id="home">
    <div id="leftpane">
      <img src="/img/gorilla.png"><br/>
      Photo by Joshua J. Cotten on Unsplash
    </div>
    <div id="rightpane">
      <h1>Tagomizer Pivot Browser</h1>
      <h2><i>Discovery is seeing what everybody else has seen, and thinking what nobody else has thought.</i> - Albert Szent-Györgyi</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/LT_x9s67yWA" frameborder="0" allow=" encrypted-media; picture-in-picture" allowfullscreen></iframe>
    </div>
  </b-container>
</template>

<script>
// @ is an alias to /src

export default {

};
</script>

<style lang="scss">
  #home {
    height: 100%;
    width: 100%;
    padding: 5% 0;
    display: inline-grid;
    grid-template-columns: auto auto;
    padding: 10px;
  }
  #leftpane {

  }
  #rightpane {
    text-align: center;
  }
</style>
