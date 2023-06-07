const pattern = require('./pattern')

describe('pattern',()=>{
    // test('should generate the correct pattern for a positive number', () => {
    //     const num = 5;
    //     const expectedOutput = [
    //       '#####',
    //       ' ####',
    //       '  ###',
    //       '   ##',
    //       '    #',
    //     ];
    //     expect(pattern(num)).toEqual(expectedOutput);
    //   });
    test('should generate the correct pattern for a larger positive number', () => {
        const num = 10;
        const expectedOutput = [
          '##########',
          ' #########',
          '  ########',
          '   #######',
          '    ######',
          '     #####',
          '      ####',
          '       ###',
          '        ##',
          '         #',
        ];
        expect(pattern(num)).toEqual(expectedOutput);
      });

      it('should generate an empty pattern for zero', () => {
        const num = 0;
        const expectedOutput = [];
        expect(pattern(num)).toEqual(expectedOutput);
      });
      it('should generate a single # pattern for 1', () => {
        const num = 1;
        const expectedOutput = ['#'];
        expect(pattern(num)).toEqual(expectedOutput);
      });
})
