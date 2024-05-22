const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://dev-finance.netlify.app',
    video: true, // Habilita a gravação de vídeo
    videoCompression: 32, // Define o nível de compressão de vídeo (0 para desativar)
    videoUploadOnPasses: true, // Faz upload dos vídeos de testes que passaram
    videosFolder: 'cypress/videos'
  },
});
