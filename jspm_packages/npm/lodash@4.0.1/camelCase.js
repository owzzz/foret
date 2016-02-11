/* */ 
var capitalize = require('./capitalize'),
    createCompounder = require('./internal/createCompounder');
var camelCase = createCompounder(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});
module.exports = camelCase;
