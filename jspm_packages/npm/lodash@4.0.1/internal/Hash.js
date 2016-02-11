/* */ 
var nativeCreate = require('./nativeCreate');
var objectProto = global.Object.prototype;
function Hash() {}
Hash.prototype = nativeCreate ? nativeCreate(null) : objectProto;
module.exports = Hash;
