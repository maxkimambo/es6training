'use strict';
var chai = require('chai');
var expect = chai.expect;


describe('Template literals', function(){
  it('should substitute vars in text', function(){

    let name = 'Max';

    // use backticks and ${varname} to do text substitution

    let greeting  = `Hello ${name}`;

    expect(greeting).to.equal('Hello Max');

  });

});
