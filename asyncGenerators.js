'use strict';

var chai = require('chai');
var expect = chai.expect;

describe('Async Generators', function(){
  it('should be easer to read code using generators, instead of callbacks', function(done){

    // // lets say we first needed to fetch data via ajax
    // // then we needed to parse the json result
    // // instead of using callbacks a generator function could be used to achieve the same.
    //
    // function httpRequest(url, callback){
    //   let result = {
    //     data: 'some data that we fetched'
    //   };
    //   callback(result);
    // }
    //
    // function *main(){
    //    yield fetchData("http://example.com/getsomeData");
    //    yield 'some processing';
    //    yield 'some more processing';
    // }
    //
    //
    //     function fetchData(url){
    //
    //         httpRequest(url, function(result){
    //           it.next(result);
    //         });
    //     }
    //
    // var it = main();
    // var output = it.next();
    //
    //       expect(output.value).to.contain('some data');
    //       done();
    // console.log(output);
    //
    //
    //

    function *escalatorGenerator(){
      yield 'step 1';
      yield 'step 2';
      yield 'step 3';
    }


    var escalator = escalatorGenerator();

    var step1 = escalator.next();
    var step2 = escalator.next();

    expect(step1.value).to.equal('step 1');
    expect(step2.value).to.equal('step 2');

    // function getFirstName() {
    //     setTimeout(function(){
    //         gen.next('alex')
    //     }, 1000);
    // }
    //
    // function getSecondName() {
    //     setTimeout(function(){
    //         gen.next('perry')
    //     }, 1000);
    // }
    //
    // function *sayHello() {
    //     var a = yield getFirstName();
    //     var b = yield getSecondName();
    //     console.log(a, b); //alex perry
    // }
    //
    // var gen = sayHello();
    //
    // gen.next();




    done();

  });
});
