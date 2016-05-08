
'use strict';

module.exports.scoping = function scoping(){
  let updateFunctions = [];

  for(let i =0; i<2; i++){
    updateFunctions.push(function(){return i; });
  }

  console.log(updateFunctions[1]());
}

module.exports.constants = function constants(){
  const NAME = 'Max Kimambo';
  console.log(NAME);
}

module.exports.arrows  = function arrows(){

  var getPrice = (count, tax) => {
      let price = count * 4.00 + (1 + tax);

      return price;
    };

  return getPrice(4, 0.2);
}
