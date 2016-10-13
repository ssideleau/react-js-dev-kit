module.exports = function () {
  this.setDefaultTimeout(60 * 1000);
  this.After(function() {
    return this.driver.quit();
  });
};