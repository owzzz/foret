/* */ 
var createCompounder = require('./internal/createCompounder');
var upperCase = createCompounder(function(result, word, index) {
  return result + (index ? ' ' : '') + word.toUpperCase();
});
module.exports = upperCase;
