//
//
//

//
var chai = require('chai'),
    should = chai.should(),
    expect = chai.expect;
var distance = require('..'),
    angularSimilarity = distance.angularSimilarity;

//
describe('AngularSimilarity Distance', function() {

  //
  it('is part of distancejs package', function() {
    distance.should.have.property('angularSimilarity');
    distance.angularSimilarity.should.be.a('function');
  });

  //
  it('accepts accessor argument', function() {
    var a = [{foo: 3, bar: 10}, {foo: 5, bar: -2}],
        b = [{foo: 2, bar: -5}, {foo: 3, bar: -1}],
        fooResult = angularSimilarity(a, b, function(d) { return d.foo; }),
        barResult = angularSimilarity(a, b, function(d) { return d.bar; });
    expect(fooResult).to.be.within(0.969, 0.970);
    expect(barResult).to.be.within(-0.749, -0.748);
  });

  //
  describe('calculation', function() {

    //
    it('same vector', function() {
      var a = [3, 4, 5, 10, 0, -1, 3],
          b = [3, 4, 5, 10, 0, -1, 3],
          result = angularSimilarity(a, b);
      expect(result).to.be.within(0.9999, 1);
    });
    it('large vector');
  });
});
