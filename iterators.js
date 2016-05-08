'use strict';
var chai = require('chai');
var expect = chai.expect;

describe('Iterables', function(){

  // different ways we can interate through an array to get a sum

  let sum = 0;
  let numbers = [1,2,3,4];

  // iterator
  it('for loops', function(){

    // reset sum
    sum =0;

    for(let i=0; i< numbers.length; i++){
      sum += numbers[i];
    }
    expect(sum).to.equal(10);
  });

  it('for in ', function(){
      sum =0;

        for(let i in numbers){
          sum += numbers[i];
        }

      expect(sum).to.equal(10);
  });

  it('iterator', function(){

      // sum =0;
      //   // first get the iterator;
      // console.log(numbers);
      //
      //   let iterator = numbers.values();
      //   let next = iterator.next();
      //
      //   while(!next.done){
      //     sum += next.value;
      //     next = iterator.next();
      //   }
      //
      // expect(sum).to.equal(10);
  });

  it('for of for iteration', function(){
    // this loops over values and not keys like the for in loop.
      sum =0;

        for(let i of numbers){
          sum += i;
        }

      expect(sum).to.equal(10);
  });

  it('building your own iterators', function(){
    
  })

});
