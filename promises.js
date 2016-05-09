'use strict';

var chai = require('chai');
var expect = chai.expect;


describe('Promises', function(){

  it('Should execute a callback after a sec', function(done){
      // As a producer you create a promise that will be either
      // resolved or rejected and return this to the consumer.
      // if this was a separate function you need to return promise to the
      // consumer.
      let promise = new Promise(function(resolve, reject){
          setTimeout(()=>{
            resolve(5);
          },1000);
      });


      // the consumer then consumes this promise and waits for it to
      // resolve or reject.
      promise.then((value)=>{
        expect(value).to.equal(5);
           done();
           return;
      }, (reason)=>{
        // the reason for rejection
      });
  });

 it('Should be resolved with some data', function(done){

   let promise = new Promise(function(resolve, reject){
        resolve(5);
   });

   promise.then(function(result){
     expect(result).to.equal(5);
     done();
   });
 });


 it('Chaining promises to perfom sync like operations', function(done){
   // lets say you have a situation where
   // you want to fetch order data, based on that order data you then fetch
   // customer data and so on.

   /*
   * Fetches orders based on id.
   */
   let orderRepository = function(id){
      let promise = new Promise(function(resolve, reject){
          // here we will simulate db operation

          setTimeout(function(){
            var orderData = {
              orderId: id,
              customerId: 'custmer-00-01',
              orderLine: ['item 1', 'item 2', 'item 3']
            };
            resolve(orderData);
          }, 500);

      });

      return promise;
   }

   /**
   * Simulates fetching customer data from a db.
   */
   let customerRepository = function(customerId){
     let promise = new Promise(function(resolve, reject){
       setTimeout(function(){
         var customerData = {
           customerId: 'custmer-00-01',
           firstName: 'Max',
           lastName: 'Kimambo'
         };
         resolve(customerData);
       }, 500);

     });

     return promise;
   }

   // Now use the order repository to fetch some customer data.
   orderRepository(22).then(function(result){

      // when this is resolved then fetch customer data.
      customerRepository(result.customerId).then(function(customer){
          expect(customer.firstName).to.equal('Max');
            done();
      });

   });

 });

});
