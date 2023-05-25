const chunkArray= require('./chunkArray')

describe('chunkArray',()=>{
    test(' to  Equal ', () => {
        const result = chunkArray([1, 2, 3, 3, 4, 5, 6, 7],3);
        expect(result).toEqual([ [ 1, 2, 3 ], [ 3, 4, 5 ], [ 6, 7 ] ]);
      });
    test(' to  Equal ', () => {
        const result = chunkArray([1, 2, 3, 3],3);
        expect(result).toEqual([ [ 1, 2, 3 ], [3] ]);
      });
    test(' to return an empty array  ', () => {
        const result = chunkArray([],3);
        expect(result).toEqual([ [] ]);
      });

})