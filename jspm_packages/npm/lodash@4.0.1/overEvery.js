/* */ 
var arrayEvery = require('./internal/arrayEvery'),
    createOver = require('./internal/createOver');
var overEvery = createOver(arrayEvery);
module.exports = overEvery;
