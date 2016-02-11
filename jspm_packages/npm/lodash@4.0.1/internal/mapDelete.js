/* */ 
var Map = require('./Map'),
    assocDelete = require('./assocDelete'),
    hashDelete = require('./hashDelete'),
    isKeyable = require('./isKeyable');
function mapDelete(key) {
  var data = this.__data__;
  if (isKeyable(key)) {
    return hashDelete(typeof key == 'string' ? data.string : data.hash, key);
  }
  return Map ? data.map['delete'](key) : assocDelete(data.map, key);
}
module.exports = mapDelete;
