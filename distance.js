(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.distancejs = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//
//
//

module.exports = {
  euclidean: require('./src/euclidean'),
  manhattan: require('./src/manhattan'),
  chebyshev: require('./src/chebyshev'),
  angular: require('./src/angular'),
  cosineSimilarity: require('./src/cosine-similarity'),
  angularSimilarity: require('./src/angular-similarity')
};

},{"./src/angular":3,"./src/angular-similarity":2,"./src/chebyshev":4,"./src/cosine-similarity":5,"./src/euclidean":6,"./src/manhattan":7}],2:[function(require,module,exports){
//
//
//
var cosineSimilarity = require('./cosine-similarity');

//
module.exports = function(a, b, accessor) {
  var cosSimValue = cosineSimilarity.apply(null, arguments);
  return 1 - ( (2 * Math.acos(cosSimValue)) / Math.PI);
};

},{"./cosine-similarity":5}],3:[function(require,module,exports){
//
//
//
var cosineSimilarity = require('./cosine-similarity');

//
module.exports = function(a, b, accessor) {
  var cosSimValue = cosineSimilarity.apply(null, arguments);
  return (2 * Math.acos(cosSimValue)) / Math.PI;
};

},{"./cosine-similarity":5}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}]},{},[1])(1)
});