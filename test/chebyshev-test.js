//
//
//

//
var chai = require('chai');
var should = chai.should();
var distance = require('..'),
    chebyshev = distance.chebyshev;

//
describe('Chebyshev Distance', function() {

  //
  it('is part of distancejs package', function() {
    distance.should.have.property('chebyshev');
    distance.chebyshev.should.be.a('function');
  });

  //
  it('accepts accessor argument', function() {
    var a = [{foo: 3, bar: 10}, {foo: 5, bar: -2}],
        b = [{foo: 2, bar: -5}, {foo: 3, bar: -1}],
        fooResult = chebyshev(a, b, function(d) { return d.foo; }),
        barResult = chebyshev(a, b, function(d) { return d.bar; });
    should.equal(fooResult, 2);
    should.equal(barResult, 15);
  });

  //
  describe('calculation', function() {

    //
    it('same vector', function() {
      var a = [3, 4, 5, 10, 0, -1, 3],
          b = [3, 4, 5, 10, 0, -1, 3],
          result = chebyshev(a, b);
      should.equal(result, 0);
    });

  });

});
