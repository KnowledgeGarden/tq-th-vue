module.exports = {
  devServer: { 
    disableHostCheck: true 
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/css/_variables.scss";`
      }
    }
  }
};
