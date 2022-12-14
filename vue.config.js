const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/scss/variables.scss";
          @import "@/scss/buttons.scss";
          @import "@/scss/typography.scss";
          @import "@/scss/helpers.scss";
        `
      }
    }
  }
})
