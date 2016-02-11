/* */ 
(function(process) {
  var isArray = require('../isArray'),
      stringToPath = require('./stringToPath');
  function baseToPath(value) {
    return isArray(value) ? value : stringToPath(value);
  }
  module.exports = baseToPath;
})(require('process'));
