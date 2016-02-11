/* */ 
var baseIteratee = require('./internal/baseIteratee'),
    baseUniq = require('./internal/baseUniq');
function uniqBy(array, iteratee) {
  return (array && array.length) ? baseUniq(array, baseIteratee(iteratee)) : [];
}
module.exports = uniqBy;
