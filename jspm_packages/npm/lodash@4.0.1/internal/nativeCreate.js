/* */ 
var getNative = require('./getNative');
var nativeCreate = getNative(Object, 'create');
module.exports = nativeCreate;
