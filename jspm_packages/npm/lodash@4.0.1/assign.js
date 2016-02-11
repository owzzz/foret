/* */ 
var copyObject = require('./internal/copyObject'),
    createAssigner = require('./internal/createAssigner'),
    keys = require('./keys');
var assign = createAssigner(function(object, source) {
  copyObject(source, keys(source), object);
});
module.exports = assign;
