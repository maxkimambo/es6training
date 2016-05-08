'use strict';

var chai = require('chai');
var expect = chai.expect;

describe('Arrays', function(){
   let numbers = [1,2,3,4,5,6];

  it('Should return first matching element using find', function(){
  //   let numbers = [1,2,3,4,5,6];

     let match = numbers.find(item => item > 5);
     expect(match).to.equal(6);
  });

  it('Should return the first matching index using findIndex', function(){

    let match = numbers.findIndex(item => item > 3);
    expect(match).to.equal(3);

  });

  it('Should copy elements with copywithin', function(){

    expect(numbers.copyWithin(2,0)).to.eql([ 1, 2, 1, 2, 3, 4 ]);

  });

  it('Should create a new array from array like object', function(){

    var newSetNumbers = Array.from(numbers);

    expect(newSetNumbers).to.eql(numbers);
  });

  it ('Should create a new array using comprehensions', function(){

    // let incremented = [for (i of numbers) i *2];
    // expect(incremented[2]).to.equal(4);

  });

});
