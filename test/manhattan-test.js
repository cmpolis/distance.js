//
//
//

//
var chai = require('chai');
var should = chai.should();
var distance = require('..'),
    manhattan = distance.manhattan;

//
describe('Manhattan Distance', function() {

  //
  it('is part of distancejs package', function() {
    distance.should.have.property('manhattan');
    distance.manhattan.should.be.a('function');
  });

  //
  it('accepts accessor argument', function() {
    var a = [{foo: 3, bar: 10}, {foo: 5, bar: -2}],
        b = [{foo: 2, bar: -5}, {foo: 3, bar: -1}],
        fooResult = manhattan(a, b, function(d) { return d.foo; }),
        barResult = manhattan(a, b, function(d) { return d.bar; });
    should.equal(fooResult, 3);
    should.equal(barResult, 16);
  });

  //
  describe('calculation', function() {

    //
    it('same vector', function() {
      var a = [3, 4, 5, 10, 0, -1, 3],
          b = [3, 4, 5, 10, 0, -1, 3],
          result = manhattan(a, b);
      should.equal(result, 0);
    });

  });

});
