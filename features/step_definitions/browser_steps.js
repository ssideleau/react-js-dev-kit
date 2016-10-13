var seleniumWebdriver = require('selenium-webdriver');

module.exports = function () {
  this.Given(/^I am on the devkit GitHub Repo$/, function() {
    return this.driver.get('https://github.com/ssideleau/react-js-dev-kit/tree/master');
  });

  this.When(/^I click "([^"]*)"$/, function (text) {
    return this.driver.findElement({linkText: text}).then(function(element) {
      return element.click();
    });
  });

  this.Then(/^I should see "([^"]*)"$/, function (text) {
    var xpath = "//*[contains(text(),'" + text + "')]";
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition, 40000);
  });
};