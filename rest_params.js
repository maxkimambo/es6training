'use strict';
var chai = require('chai');
var expect = chai.expect;


describe('Rest parameters', function(){
  it('is like varargs', function(){

     let doSum = function(name, ...numbers){
        let result =0;

        numbers.forEach(function(n){
          result += n;
        });

        return result;
     }

     let sumResult = doSum('Max', 1,2,3);

     expect(sumResult).to.equal(6);

  });
});

describe('Spread operator', function(){
  it('spreads the arguments', function(){
    let doSum = function(x,y,z){
      return x+y+z;
    }

    var result = doSum(...[1,2,3]);

    expect(result).to.equal(6);

  });

  it('can build arrays', function(){
    var a = [4,5,6];
    var b = [1,2,3, ...a,7];

      console.log(b);
    // expect(b).to.equal([1,2,3,4,5,6,7]);
  });
});
