//
//
//
var cosineSimilarity = require('./cosine-similarity');

//
module.exports = function(a, b, accessor) {
  var cosSimValue = cosineSimilarity.apply(null, arguments);
  return (2 * Math.acos(cosSimValue)) / Math.PI;
};
