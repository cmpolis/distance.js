//
//
//

//
var chai = require('chai'),
    should = chai.should(),
    expect = chai.expect;
var distance = require('..'),
    euclidean = distance.euclidean;

//
describe('Euclidean Distance', function() {

  //
  it('is part of distancejs package', function() {
    distance.should.have.property('euclidean');
    distance.euclidean.should.be.a('function');
  });

  //
  it('accepts accessor argument', function() {
    var a = [{foo: 3, bar: 10}, {foo: 5, bar: -2}],
        b = [{foo: 2, bar: -5}, {foo: 3, bar: -1}],
        fooResult = euclidean(a, b, function(d) { return d.foo; }),
        barResult = euclidean(a, b, function(d) { return d.bar; });
    expect(fooResult).to.be.within(2.23, 2.24);
    expect(barResult).to.be.within(15.03, 15.04);
  });

  //
  describe('calculation', function() {

    //
    it('same vector', function() {
      var a = [3, 4, 5, 10, 0, -1, 3],
          b = [3, 4, 5, 10, 0, -1, 3],
          result = euclidean(a, b);
      should.equal(result, 0);
    });
    it('large vector');
  });

});
