const { defineConfig } = require("cypress");

const fs = require("fs-extra");
const path = require("path");

const fetchConfigurationByFile = file => {
  const pathOfConfigurationFile = `CypressTutorial/cypress/config/${file}.json`;

  return (
    file && fs.readJson(path.join(__dirname, "../", pathOfConfigurationFile))
  );
};


module.exports = defineConfig({
  
  projectId: "99gi2s",

  e2e: {

    // baseUrl : "https://demoqa.com/login",
    setupNodeEvents(on, config) {
      // implement node event listeners here

        const environment = config.env.configFile || "env";
        const configurationForEnvironment = fetchConfigurationByFile(environment);
      
        return configurationForEnvironment || config;
      

    },
  },
});
