const frequentCharacter= require('./frequentCharacter')

describe('frequentCharacter',()=>{
    test('returns n as the most frequent',()=>{
        const result  =  frequentCharacter('jonathann')
        expect(result).toBe('n')
    });
    test(' most frtequent number is 1', () => {
        const result = frequentCharacter('11116');
        expect(result).toBe('1');
      });
    test(' to  be undefined', () => {
        const result = frequentCharacter('');
        expect(result).toBe('');
      });
})


