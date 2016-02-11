/* */ 
(function(process) {
  var apply = require('./internal/apply'),
      arrayMap = require('./internal/arrayMap'),
      unzip = require('./unzip');
  function unzipWith(array, iteratee) {
    if (!(array && array.length)) {
      return [];
    }
    var result = unzip(array);
    if (iteratee == null) {
      return result;
    }
    return arrayMap(result, function(group) {
      return apply(iteratee, undefined, group);
    });
  }
  module.exports = unzipWith;
})(require('process'));
