/* */ 
var Map = require('./Map'),
    assocHas = require('./assocHas'),
    hashHas = require('./hashHas'),
    isKeyable = require('./isKeyable');
function mapHas(key) {
  var data = this.__data__;
  if (isKeyable(key)) {
    return hashHas(typeof key == 'string' ? data.string : data.hash, key);
  }
  return Map ? data.map.has(key) : assocHas(data.map, key);
}
module.exports = mapHas;
