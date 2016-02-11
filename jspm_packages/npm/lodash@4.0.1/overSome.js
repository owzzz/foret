/* */ 
var arraySome = require('./internal/arraySome'),
    createOver = require('./internal/createOver');
var overSome = createOver(arraySome);
module.exports = overSome;
