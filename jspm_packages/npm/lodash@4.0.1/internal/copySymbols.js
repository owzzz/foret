/* */ 
var copyObject = require('./copyObject'),
    getSymbols = require('./getSymbols');
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}
module.exports = copySymbols;
