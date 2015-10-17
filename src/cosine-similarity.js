//
//
//

//
module.exports = function(a, b, accessor) {
  var x = accessor ? a.map(accessor) : a,
      y = accessor ? b.map(accessor) : b,
      dotProduct = 0,
      xMagnitude = 0,
      yMagnitude = 0;

  for(var ndx = 0; ndx < x.length; ndx++) {
    xMagnitude += x[ndx] * x[ndx];
    yMagnitude += y[ndx] * y[ndx];
    dotProduct += x[ndx] * y[ndx];
  }
  return dotProduct / ( Math.sqrt(xMagnitude) * Math.sqrt(yMagnitude) );
};
