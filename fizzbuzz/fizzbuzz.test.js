const fizzBuzz = require ('./fizzbuzz')

describe('fizzBuzz',()=>{
    test("FizzBuzz should return an empty array for negative numbers", () => {
        expect(fizzBuzz(-10)).toEqual([]);
      });
    test(" should return the correct sequence up to 15", () => {
        expect(fizzBuzz(15)).toEqual([
          1,
          2,
          "Fizz",
          4,
          "Buzz",
          "Fizz",
          7,
          8,
          "Fizz",
          "Buzz",
          11,
          "Fizz",
          13,
          14,
          "FizzBuzz",
        ]);
      });
      test("return an empty array for 0", () => {
        expect(fizzBuzz(0)).toEqual([]);
      });
      test('should return 1', () => {
        expect(fizzBuzz(1)).toEqual([1]);
      });
      test('should return the correct sequence up to 5', () => {
        expect(fizzBuzz(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
      });
      
})