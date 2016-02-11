/* */ 
var getNative = require('./getNative');
var WeakMap = getNative(global, 'WeakMap');
module.exports = WeakMap;
