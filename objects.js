'use strict';

var chai = require('chai');
var expect = chai.expect;

describe('Objects', function(){

  it('Using object.is to do NaN', function(){
      // in most cases this is the same as === operator
      // the difference is in checking NaN because NaN === NaN is false.

      var nanResult = Object.is(NaN, NaN);
      expect(nanResult).to.equal(true);
  });

  it('Using object.assing', function(){

    // allows to copy properites and methods from one object to another.

    var shark = {
      bite: function(target){
        target.hurt = true;
      }
    }

    var person = {};
    var laser = {
      boom : function(target){
        target.explode = true;
      }
    }
    // now adding laser to shark
    Object.assign(shark, laser);
    // we are invoking the new property that we just added to the
    // shark object.
    shark.boom(person);
    expect(person.explode).to.equal(true);

  });

});
