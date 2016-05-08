'use strict';
var chai = require('chai');
var expect = chai.expect;

describe('Generators', function(){
  it('building an iterable', function(){

    // example generator function
    // it should have function* and one or more yield statements
    // it has an advantage over iterrators because it maintains its own state
    // hence simplyfiying writing iterator functions

      function* idMaker(){
        let index =0;
        while(true){
          yield index++;
        }
      }

var gen = idMaker();
    expect(gen.next().value).to.equal(0);
    expect(gen.next().value).to.equal(1);
  });

  it('replacing iterator with a generator', function(){

    let company = {
      employees: [],
      addEmployee: function(...names){
       names.forEach((n) =>  this.employees.push(n));
     },
     *[Symbol.iterator](){
      //  let index =0;
      //  return {
      //    next: ()=>{
      //      let value = this[index];
      //      let done = index >= this.employees.length;
      //      index++;
      //      return {value, done}
      //    }
      //  }

      // all of the above code can be replaced by this

      for(let e of this.employees){
        yield e; 
      }
     }
   }

    company.addEmployee('Max', 'Bill', 'Robin');

    let count = 0;

    for(let employee of company){
      count +=1;
    }

    expect(count).to.equal(3);

  });

});
