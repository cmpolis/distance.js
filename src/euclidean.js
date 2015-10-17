//
//
//

//
module.exports = function(a, b, accessor) {
  var x = accessor ? a.map(accessor) : a,
      y = accessor ? b.map(accessor) : b,
      distance = 0;
  for(var ndx = 0; ndx < x.length; ndx++) {
    distance += (x[ndx] - y[ndx]) * (x[ndx] - y[ndx]);
  }
  return Math.sqrt(distance);
};
