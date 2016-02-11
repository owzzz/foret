/* */ 
var Hash = require('./Hash'),
    Map = require('./Map');
function mapClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': Map ? new Map : [],
    'string': new Hash
  };
}
module.exports = mapClear;
