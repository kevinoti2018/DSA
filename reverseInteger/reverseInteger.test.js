const reverseInteger= require('./reverseInteger')

describe('reverseInteger',()=>{
    test(' to  Equal ', () => {
        const result = reverseInteger(8);
        expect(result).toEqual(8);
      });
    test(' to  Equal ', () => {
        const result = reverseInteger(788);
        expect(result).toEqual(887);
      });
    test(' to  Equal ', () => {
        const result = reverseInteger(-90);
        expect(result).toEqual(-9);
      });
})
