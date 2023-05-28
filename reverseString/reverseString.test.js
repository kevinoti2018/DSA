const reverseString =  require('./reverseString')

describe('reverseString',()=>{
    test(' to  Equal ', () => {
        const result = reverseString('you');
        expect(result).toEqual('uoy');
      });
    test(' to  be empty', () => {
        const result = reverseString('');
        expect(result).toBe('');
      });
    test(' to  be same', () => {
        const result = reverseString('oo');
        expect(result).toBe('oo');
      });
    
})

