const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demo.1crmcloud.com",
   
  },
  "defaultCommandTimeout": 15000,
  env: {
  username: 'admin',
  password: 'admin'
  }
});
