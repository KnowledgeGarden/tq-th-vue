module.exports = {
  devServer: { 
    // disableHostCheck: true 
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/css/_variables.scss";`
      }
    }
  }
};
