const expect = require('chai').expect;
const convertor = require('../convertor');

describe('convertor', ()=> {
  describe('toF', ()=> {
    it('0 degrees celcius should be 32 degrees F', ()=> {
      expect(convertor.toF(0)).to.equal(32);
    });
    it('100 degrees celcius should be 212 degrees F', ()=> {
      expect(convertor.toF(100)).to.equal(212);
    });
  });
  describe('toC', ()=> {
    it('32 degrees F should be 0 degrees C', ()=> {
      expect(convertor.toC(32)).to.equal(0);
    });
    it('212 degrees farenheight should be 100 degrees C', ()=> {
      expect(convertor.toC(212)).to.equal(100);
    });
  });
});
