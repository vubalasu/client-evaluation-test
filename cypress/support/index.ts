import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
  //returning false here prevents Cypress from
//failing the test
 return false
 })

module.exports = (on:any) => {
    on('before:browser:launch', (browser :any, launchOptions:any) => {
      if (browser.name === 'chrome') {
        launchOptions.args.push('--disable-dev-shm-usage');  //https://github.com/cypress-io/cypress/issues/350
        launchOptions.args.push('--disable-extensions');     //https://github.com/cypress-io/cypress/issues/5969
        launchOptions.args.push('--window-size=1920,1080');  //https://github.com/cypress-io/cypress-docker-images/issues/270
        launchOptions.args.push('--disable-gpu');
        launchOptions.args.push('--no-sandbox');
        launchOptions.args.push('--disable-setuid-sandbox');
        launchOptions.args.push('--disable-features=VizDisplayCompositor');
        return launchOptions;
      }
      return launchOptions;
    })
 };

 // in cypress/support/index.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
    }
  }
}
