/* */ 
var copyObjectWith = require('./internal/copyObjectWith'),
    createAssigner = require('./internal/createAssigner'),
    keys = require('./keys');
var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
  copyObjectWith(source, keys(source), object, customizer);
});
module.exports = assignWith;
