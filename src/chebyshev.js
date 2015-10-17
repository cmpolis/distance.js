//
//
//

//
module.exports = function(a, b, accessor) {
  var x = accessor ? a.map(accessor) : a,
      y = accessor ? b.map(accessor) : b,
      distance = Math.abs(x[0] - y[0]);
  for(var ndx = 1; ndx < x.length; ndx++) {
    distance = Math.max(distance, Math.abs(x[ndx] - y[ndx]));
  }
  return distance;
};
