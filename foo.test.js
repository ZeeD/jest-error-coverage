const { E } = require('./foo.js');

describe('E', () => {
 it('is an exception', () => {
  expect(() => {
   throw new E();
  }).toThrow(E);
 });
});
