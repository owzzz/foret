/* */ 
var baseInvoke = require('./internal/baseInvoke'),
    rest = require('./rest');
var invoke = rest(baseInvoke);
module.exports = invoke;
