/* */ 
var Symbol = require('./Symbol');
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = Symbol ? symbolProto.valueOf : undefined;
function cloneSymbol(symbol) {
  return Symbol ? Object(symbolValueOf.call(symbol)) : {};
}
module.exports = cloneSymbol;
