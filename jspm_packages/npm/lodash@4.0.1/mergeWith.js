/* */ 
var baseMerge = require('./internal/baseMerge'),
    createAssigner = require('./internal/createAssigner');
var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});
module.exports = mergeWith;
