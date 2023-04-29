import { defineConfig } from 'cypress';
import coverage from '@cypress/code-coverage/task';

export default defineConfig({
  projectId: 'pjx9w6',
  pageLoadTimeout: 180000,
  env: {
    codeCoverage: {
      exclude: "cypress/**/*.*",
    },
  },
  e2e: {
    baseUrl: 'http://localhost:3000/',
    setupNodeEvents(on, config) {
      coverage(on, config);
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome' && browser.isHeadless) {
          const version = parseInt((browser.majorVersion).toString())
          if (version >= 112) {
            launchOptions.args.push('--headless=new')
          }
        }

        return launchOptions
      })
      return config;
    },
    testIsolation: false,
    supportFile: false,
  },
  video: false,
});
