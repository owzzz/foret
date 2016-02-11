/* */ 
var copyObjectWith = require('./internal/copyObjectWith'),
    createAssigner = require('./internal/createAssigner'),
    keysIn = require('./keysIn');
var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
  copyObjectWith(source, keysIn(source), object, customizer);
});
module.exports = assignInWith;
