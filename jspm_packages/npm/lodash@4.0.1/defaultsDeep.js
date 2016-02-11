/* */ 
var apply = require('./internal/apply'),
    mergeDefaults = require('./internal/mergeDefaults'),
    mergeWith = require('./mergeWith'),
    rest = require('./rest');
var defaultsDeep = rest(function(args) {
  args.push(undefined, mergeDefaults);
  return apply(mergeWith, undefined, args);
});
module.exports = defaultsDeep;
