/* */ 
var stackClear = require('./stackClear'),
    stackDelete = require('./stackDelete'),
    stackGet = require('./stackGet'),
    stackHas = require('./stackHas'),
    stackSet = require('./stackSet');
function Stack(values) {
  var index = -1,
      length = values ? values.length : 0;
  this.clear();
  while (++index < length) {
    var entry = values[index];
    this.set(entry[0], entry[1]);
  }
}
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
module.exports = Stack;
