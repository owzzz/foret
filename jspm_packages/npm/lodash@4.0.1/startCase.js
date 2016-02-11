/* */ 
var capitalize = require('./capitalize'),
    createCompounder = require('./internal/createCompounder');
var startCase = createCompounder(function(result, word, index) {
  return result + (index ? ' ' : '') + capitalize(word);
});
module.exports = startCase;
