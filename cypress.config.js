const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
// step 1: tell Cypress to use Mochawesome as the reporter
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
// step 2: load Mochawesome reporter plugin
    },
  },
});