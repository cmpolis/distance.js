//
//
//

//
module.exports = function(a, b, accessor) {
  var x = accessor ? a.map(accessor) : a,
      y = accessor ? b.map(accessor) : b,
      distance = 0;
  for(var ndx = 0; ndx < x.length; ndx++) {
    distance += Math.abs(x[ndx] - y[ndx]);
  }
  return distance;
};
