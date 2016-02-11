/* */ 
var apply = require('./internal/apply'),
    assignInDefaults = require('./internal/assignInDefaults'),
    assignInWith = require('./assignInWith'),
    rest = require('./rest');
var defaults = rest(function(args) {
  args.push(undefined, assignInDefaults);
  return apply(assignInWith, undefined, args);
});
module.exports = defaults;
