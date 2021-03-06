// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  chromeOnly: false,

  // Capabilities to be passed to the webdriver instance.
  multiCapabilities: [
    //{ 'browserName': 'phantomjs'},
    { 'browserName': 'chrome' },
    { 'browserName': 'firefox'}
  ],

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['specs/angular_homepage.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },
  onPrepare: function() {
    browser.ignoreSynchronization = true;
  }
};
