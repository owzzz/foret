/* */ 
var baseMerge = require('./internal/baseMerge'),
    createAssigner = require('./internal/createAssigner');
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
module.exports = merge;
