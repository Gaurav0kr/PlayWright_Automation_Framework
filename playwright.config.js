// @ts-check
import { chromium, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
 // testDir: './tests',
  timeout: 40*1000,
  expect: {
    timeout: 40*1000,
  },
  reporter:'html',

   projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } },
    { name: 'Firefox', use: { browserName: 'firefox' } },
    { name: 'WebKit', use: { browserName: 'webkit' } }
  ],
  use: {

    browserName:'webkit',
    screenshot:'on',
    //trace:'on',
    trace:'retain-on-failure'

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  
  },

});
module.exports = config;
