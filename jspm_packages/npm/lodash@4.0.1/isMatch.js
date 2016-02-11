/* */ 
var baseIsMatch = require('./internal/baseIsMatch'),
    getMatchData = require('./internal/getMatchData');
function isMatch(object, source) {
  return object === source || baseIsMatch(object, source, getMatchData(source));
}
module.exports = isMatch;
