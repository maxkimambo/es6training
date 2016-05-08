'use strict';
var chai = require('chai');
var expect = chai.expect;

describe('Arrow functions', function(){
  it('demo on usage', function(){
    let add = (x,y) => {return x +y;};
    expect(add(3,5)).to.equal(8);
  });
  it('can be used with array methods', function(){

    var numbers = [1,2,3,4];

    let sum = 0;

    numbers.forEach((n) => {
        sum += n;
      return sum;
    })
   expect(sum).to.equal(10);
   // doubling teh items in an array
   expect(numbers.map(n => n*2)).to.eql([2,4,6,8]);
  });

  it('lexically binds to this', function(done){

    this.name = "Max";

    // assuming some async function

    setTimeout(()=> {
        // the arrow function takes care that this still points to the
        // correct scope

          expect(this.name).to.equal('Max');
          done();
    },15);

  });

});
